"use strict"

module.exports = (app) => {
  /**
   * Dependencies
   */

  const base = app.locals.base
  const fs = require("fs")
  const path = require("path")

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

    static update(req, res) {
      // var form = new formidable.IncomingForm()
      // form.parse(req, (err, fields, files) => {
      //   if (err) {
      //     next(err)
      //   } else {
      //     let custom_scss = fields.style.toLowerCase()
      //     if (custom_scss.length == 0) {
      //       fs.writeFileSync(base + "/tmp/bootstrap/scss/_custom.scss", "// Drink the Sea" + os.EOL, "utf8")
      //     } else {
      //       fs.writeFileSync(base + "/tmp/bootstrap/scss/_custom.scss", custom_scss + os.EOL, "utf8")
      //     }
      //     child_process.exec("npm install", { cwd: base + "/tmp/bootstrap" }, (err, stdout, stderr) => {
      //       if (err) {
      //         next(err)
      //       } else {
      //         child_process.exec("npm run css-main", { cwd: base + "/tmp/bootstrap" }, (err, stdout, stderr) => {
      //           if (err) {
      //             next(err)
      //           } else {
      //             res.sendStatus(200)
      //           }
      //         })
      //       }
      //     })
      //   }
      // })
      res.redirect("/")
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
