'use strict'

const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')

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
app.get("/", function(req, res) {
  res.render("editor")
})
app.post("/update", function(req, res) {
  console.log("Updating tmp/bootstrap/scss/_custom.scss")
  fs.writeFileSync(root + '/tmp/bootstrap/scss/_custom.scss', "Hello world!\n", 'utf8')
  // TODO: console.log("Running npm dist...")
  res.render("editor")
})
app.get("/download", function(req, res) {
  res.download(root + '/tmp/bootstrap/dist/css/bootstrap.min.css', (err) => {
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
