'use strict'

/**
 * Dependencies
 */

const electron = require('electron');

/**
 * Constants
 */

const electron_app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const port = process.env.PORT || 3000;
const title = "Theme Builder";

/**
 * Protect main_window from garbage collection.
 */

let main_window = null;

/**
 * Define function to create window.
 */

function create_window() {
  const { width, height } = electron.screen.getPrimaryDisplay().workAreaSize;

  let main_window = new BrowserWindow({
    title: title,
    width: width - (width / 4),
    height: height,
    show: false,
    center: true,
    webPreferences: {
      nodeIntegration: true,
      sandbox: false
    }
  });

  main_window.loadURL(`http://localhost:${port}`);
  main_window.once('ready-to-show', main_window.show);
}

/**
 * Mount handler for Electron 'ready' event.
 */

electron_app.on("ready", create_window);
