"use strict"

module.exports = (app) => {
  /**
   * Dependencies
   */

  const base = app.locals.base
  const express = require("express")
  const RootController = require(base + "/app/controllers/root_controller")(app)

  /**
   * Initialize router.
   */

  const router = express.Router()

  /**
   * Routes
   */

  router.route("/")
    .get(RootController.index)
  // app.get("/", (req, res) => {
  //   let scss = fs.readFileSync(base + "/tmp/bootstrap/scss/_custom.scss", "utf8")
  //   res.render("editor", { custom_scss: scss })
  // })

  router.route("/")
    .get(RootController.redirect_to_index)
    .post(RootController.index)
  // app.post("/update", (req, res, next) => {
  //   var form = new formidable.IncomingForm()
  //   form.parse(req, (err, fields, files) => {
  //     if (err) {
  //       next(err)
  //     } else {
  //       let custom_scss = fields.style.toLowerCase()
  //       if (custom_scss.length == 0) {
  //         fs.writeFileSync(base + "/tmp/bootstrap/scss/_custom.scss", "// Drink the Sea" + os.EOL, "utf8")
  //       } else {
  //         fs.writeFileSync(base + "/tmp/bootstrap/scss/_custom.scss", custom_scss + os.EOL, "utf8")
  //       }
  //       child_process.exec("npm install", { cwd: base + "/tmp/bootstrap" }, (err, stdout, stderr) => {
  //         if (err) {
  //           next(err)
  //         } else {
  //           child_process.exec("npm run css-main", { cwd: base + "/tmp/bootstrap" }, (err, stdout, stderr) => {
  //             if (err) {
  //               next(err)
  //             } else {
  //               res.sendStatus(200)
  //             }
  //           })
  //         }
  //       })
  //     }
  //   })
  // })
  // app.get("/download", (req, res, next) => {
  //   let css_path = base + "/tmp/bootstrap/dist/css/bootstrap.min.css"
  //   res.download(css_path, "bootstrap.min.css", (err) => {
  //     if (err) {
  //       next(err)
  //     } else {
  //       console.log("Sent:", "bootstrap.min.css")
  //     }
  //   })
  // })

  /**
   * Export router.
   */

  return router
}
