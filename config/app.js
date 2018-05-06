"use strict"

/**
 * Dependencies
 */

const express = require("express")
const path = require("path")
const ejs = require("ejs")
const debug = require("debug")("app.js")

/**
 * Define app
 */

debug("Define app")
const app = express()

/**
 * Constants
 */

debug("Constants")
const title = "Theme Builder"
const base = path.join(__dirname, "..")
const env = process.env.NODE_ENV || "development"
const views = path.join(base, "/app/views")

/**
 * Locals
 */

debug("Locals")
app.locals.title = title
app.locals.base = base
app.locals.env = env
app.locals.views = views

/**
 * Settings
 */

debug("Settings")
app.set("env", env)
app.disable("x-powered-by")
app.set("json spaces", 2)

/**
 * View engine
 */

debug("View engine")
app.engine("html.ejs", ejs.renderFile);
app.set("view engine", ".html.ejs")
app.set("views", views)

/**
 * Middleware
 */

debug("Mount middleware")
app.use(require(base + "/lib/middleware/setup_instructions"))
app.use(require(base + "/lib/middleware/parsers/json_body_parser"))
app.use(require(base + "/lib/middleware/parsers/urlencoded_body_parser"))
app.use(require(base + "/lib/middleware/serve_favicon"))

/**
 * Static assets
 */

debug("Mount static assets")
app.use("/assets", express.static(base + "/node_modules/jquery/dist"))
app.use("/assets", express.static(base + "/node_modules/popper.js/dist/umd"))
app.use("/assets", express.static(base + "/node_modules/font-awesome"))
app.use("/assets", express.static(base + "/tmp/bootstrap/dist"))
app.use("/assets", express.static(base + "/app/assets"))

/**
 * Routes
 */

debug("Mount routes")
app.use("/", require("./routes/root_router")(app))

/**
 * Error handlers
 */

debug("Mount error handlers")
app.use(require(base + "/lib/middleware/errors/page_not_found"))
app.use(require(base + "/lib/middleware/errors/render_error"))

/**
 * Define server startup.
 */

app.start_server = async (port=53011) => {
  try {
    /**
     * Start listening for requests.
     */

    const server = app.listen(port, () => {
      console.log(`Express app listening on port ${port}\n`)
    })
  } catch(err) {
    console.error(err)
    process.exit(1)
  }
}

/**
 * Start server if called as a script.
 */

if (module === require.main) {
  debug("Start server")
  app.start_server()
}

/**
 * Export app.
 */

module.exports = app
