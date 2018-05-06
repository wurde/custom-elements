"use strict"

module.exports = (app) => {
  /**
   * Dependencies
   */

  const base = app.locals.base
  const fs = require("fs")
  const os = require("os")
  const path = require("path")
  const formidable = require("formidable")
  const child_process = require("child_process")

  /**
   * Define controller
   */

  class RootController {
    /**
     * Render index page.
     *
     * @static @method
     * @since 1.0.4
     * @public
     */

    static index(req, res) {
      let scss = fs.readFileSync(path.join(base, "tmp", "custom.scss"), "utf8")
      res.render("index", { custom_scss: scss })
    }

    /**
     * Redirect to index page.
     *
     * @static @method
     * @since 1.0.4
     * @public
     */

    static redirect_to_index(req, res) {
      res.redirect("/")
    }

    /**
     * Update theme.
     *
     * @static @method
     * @since 1.0.4
     * @public
     */

    static update(req, res, next) {
      const form = new formidable.IncomingForm()

      form.parse(req, (err, fields, files) => {
        if (err) { return next(err) }

        const bootstrap_path = path.join(base, "tmp", "bootstrap")
        const scss_path = path.join(base, "tmp", "custom.scss")
        const custom_scss = fields.style.toLowerCase()

        if (custom_scss.length == 0) {
          fs.writeFileSync(scss_path, "// Drink the Sea" + os.EOL, {
            encoding: "utf8",
            flag: "w+"
          })
        } else {
          fs.writeFileSync(scss_path, custom_scss + os.EOL, {
            encoding: "utf8",
            flag: "w+"
          })
          fs.writeFileSync(scss_path, '@import "bootstrap/scss/bootstrap";' + os.EOL, {
            encoding: "utf8",
            flag: "a+"
          })
        }

        child_process.exec("npm run compile-scss", { cwd: base }, (err, stdout, stderr) => {
          if (err) { return next(err) }
          res.sendStatus(200)
        })
      })
    }

    /**
     * Download theme.
     *
     * @static @method
     * @since 1.0.4
     * @public
     */

    static download(req, res) {
      let css_path = path.join(base, "app", "assets", "css", "bootstrap_theme.min.css")

      res.download(css_path, "bootstrap_theme.min.css", (err) => {
        if (err) { next(err) }
      })
    }
  }

  /**
   * Export controller
   */

  return RootController
}
