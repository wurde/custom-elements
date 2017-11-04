'use strict'

const electron = require('electron')
const desktop_app = electron.app
const BrowserWindow = electron.BrowserWindow
const path = require('path')

let main_window = null

desktop_app.on('ready', () => {
  let title = "ThemeBuilder"
  let port = 53011
  let web_app = require(path.join(__dirname, '/config/app.js'))
  let {width, height} = electron.screen.getPrimaryDisplay().workAreaSize
  let main_window = new BrowserWindow({
    width: width/2,
    height: height,
    center: true,
    show: false,
    title: title
  })

  web_app.listen(port, () => {
    main_window.loadURL(`http://localhost:${port}`)
    main_window.on('closed', () => {
      desktop_app.quit()
    })
    main_window.on('ready-to-show', () => {
      main_window.show()
    })
  })
})
