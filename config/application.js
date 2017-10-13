'use strict'

const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')
const formidable = require('formidable')
const child_process = require('child_process')

let port = 53011
let root = path.join(__dirname, '/..')

//
// Application variables
//
app.locals.title = "Theme Builder"
app.locals.root  = root
app.locals.views = root + '/app/views'

//
// Settings
//
app.disable('x-powered-by')

//
// View engine: Embedded JavaScript - ejs.co
//
app.engine('html.ejs', require('ejs').renderFile);
app.set('views', app.locals.views)
app.set('view engine', 'html.ejs')

//
// Middleware
//
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(require(root + '/lib/middleware/serve_favicon')(app))

//
// Static assets
//
app.use('/assets', express.static(root + '/node_modules/jquery/dist'))
app.use('/assets', express.static(root + '/node_modules/popper.js/dist/umd'))
app.use('/assets', express.static(root + '/tmp/bootstrap/dist'))

//
// Routes
//
app.get("/", (req, res) => {
  let scss = fs.readFileSync(root + '/tmp/bootstrap/scss/_custom.scss', 'utf8')
  res.render("editor", { custom_scss: scss })
})
app.post("/update", (req, res, next) => {
  var form = new formidable.IncomingForm()
  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err)
    } else {
      fs.writeFileSync(root + '/tmp/bootstrap/scss/_custom.scss', fields.style, 'utf8')
      child_process.exec('npm install', { cwd: root + '/tmp/bootstrap' }, (err, stdout, stderr) => {
        if (err) {
          next(err)
        } else {
          child_process.exec('npm run css-main', { cwd: root + '/tmp/bootstrap' }, (err, stdout, stderr) => {
            if (err) {
              next(err)
            } else {
              res.sendStatus(200)
            }
          })
        }
      })
    }
  })
})
app.get("/download", (req, res) => {
  let css_path = root + '/tmp/bootstrap/dist/css/bootstrap.min.css'
  res.download(css_path, 'bootstrap.min.css', (err) => {
    if (err) {
      next(err)
    } else {
      console.log('Sent:', 'bootstrap.min.css')
    }
  })
})

//
// Error handlers
//
app.use(require(root + '/lib/middleware/page_not_found'))
app.use(require(root + '/lib/middleware/render_error'))

if (!module.parent) {
  app.listen(port, () => {
    console.log(`Running express.js app on port ${port}`)
  })
}

module.exports = app
