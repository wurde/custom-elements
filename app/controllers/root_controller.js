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
      let scss = fs.readFileSync(base + "/tmp/bootstrap/scss/_custom.scss", "utf8")
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
        const scss_path = path.join(base, "tmp", "bootstrap", "scss", "_custom.scss")
        const custom_scss = fields.style.toLowerCase()

        if (custom_scss.length == 0) {
          fs.writeFileSync(scss_path, "// Drink the Sea" + os.EOL, "utf8")
        } else {
          fs.writeFileSync(scss_path, custom_scss + os.EOL, "utf8")
        }

        child_process.exec("npm install", { cwd: bootstrap_path }, (err, stdout, stderr) => {
          if (err) { return next(err) }
          child_process.exec("npm run css-main", { cwd: bootstrap_path }, (err, stdout, stderr) => {
            if (err) { return next(err) }
            res.sendStatus(200)
          })
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
      let css_path = path.join(base, "tmp", "bootstrap", "dist", "css", "bootstrap.min.css")

      res.download(css_path, "bootstrap.min.css", (err) => {
        if (err) { next(err) }
      })
    }
  }

  /**
   * Export controller
   */

  return RootController
}
