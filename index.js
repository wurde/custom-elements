"use strict"

/**
 * Dependencies
 */

const electron = require("electron")
const path = require("path")

/**
 * Constants
 */

const desktop_app = electron.app
const BrowserWindow = electron.BrowserWindow
const dialog = electron.dialog
const title = "Theme Builder"
const port = 53011

/**
 * Protect main_window from garbage collection.
 */

let main_window = null

/**
 * Handle error dialogs via terminal.
 */

dialog.showErrorBox = (title, content) => {
  console.error(title, "\n", content)
  desktop_app.exit(1)
}

/**
 * When Electron is ready.
 */

desktop_app.on("ready", async () => {
  try {
    /**
     * Locals
     */

    let web_app = require(path.join(__dirname, "config", "app.js"))
    let {width, height} = electron.screen.getPrimaryDisplay().workAreaSize

    /**
     * Define the main window.
     */

    let main_window = new BrowserWindow({
      title: title,
      width: width/2,
      height: height,
      center: true,
      show: false
    })

    /**
     * Start the server.
     */

    await web_app.start_server(port)

    /**
     * Load URL of Express application.
     */

    main_window.loadURL(`http://localhost:${port}`)

    /**
     * Close Electron app.
     */

    main_window.on("closed", () => {
      main_window = null
      desktop_app.quit()
    })

    /**
     * Show main window when ready.
     */

    main_window.on("ready-to-show", () => {
      try {
        main_window.show()
      } catch(err) {
        console.error(err)
        desktop_app.exit(1)
      }
    })
  } catch(err) {
    console.error(err)
    desktop_app.exit(1)
  }
})
