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

  // GET /
  router.route("/")
    .get(RootController.index)

  // GET,POST /update
  router.route("/update")
    .get(RootController.redirect_to_index)
    .post(RootController.update)

  // GET /download
  router.route("/download")
    .get(RootController.download)

  /**
   * Export router.
   */

  return router
}
