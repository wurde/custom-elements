'use strict'

/**
 * Dependencies
 */

const url = require('url')
const path = require('path')
const electron = require('electron')

/**
 * Constants
 */

const electron_app = electron.app
const BrowserWindow = electron.BrowserWindow
const title = "Theme Builder"

/**
 * Protect main_window from garbage collection.
 */

let main_window = null

/**
 * Define function to create window.
 */

function create_window() {
  const { width, height } = electron.screen.getPrimaryDisplay().workAreaSize

  let main_window = new BrowserWindow({
    title: title,
    width: width - (width / 4),
    height: height,
    webPreferences: {
      nodeIntegration: true
    }
  })

  const index_path = url.format({
    pathname: path.join(__dirname, 'client/build/index.html'),
    protocol: 'file'
  })

  main_window.loadURL(index_path)
}

/**
 * Mount handler for Electron 'ready' event.
 */

electron_app.on("ready", create_window)
