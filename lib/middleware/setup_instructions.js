"use strict"

/**
 * Dependencies
 */

const path = require("path")
const fs = require("fs")

/**
 * Define middleware
 */

module.exports = (req, res, next) => {
  let custom_scss = path.join(req.app.locals.base, "tmp", "custom.scss")

  if (fs.existsSync(custom_scss)) {
    next()
  } else {
    res.status(400).send("You haven't setup the app. Exit and run `npm run setup`.")
  }
}
