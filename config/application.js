'use strict'

const express = require('express')
const app = express()
const path = require('path')

let port = 53011
let root = path.join(__dirname, '/..')

//
// Application variables
//
app.locals.title = "ThemeBuilder"
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
// Static assets
//
app.use(express.static(root + '/public'))
app.use('/assets', express.static(root + '/node_modules/jquery/dist'))
app.use('/assets', express.static(root + '/node_modules/popper.js/dist/umd'))
app.use('/assets', express.static(root + '/node_modules/bootstrap/dist'))
app.use('/assets', express.static(root + '/node_modules/turbolinks/dist'))

//
// Routes
//
app.get("/", function(req, res) {
  res.render("editor")
})

if (!module.parent) {
  app.listen(port, () => {
    console.log(`Running express.js app on port ${port}`)
  })
}

module.exports = app
