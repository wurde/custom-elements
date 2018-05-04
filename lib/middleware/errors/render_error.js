"use strict"

/**
 * Export middleware
 */

module.exports = (err, req, res, next) => {
  err.status = (err.status || 500)
  err.message = (err.message || "Internal Server Error")
  if (req.app.get("env") === "production") { err.stack = undefined }

  console.error(err.message)

  res.status(err.status).render("error", {
    "status": err.status,
    "error": err
  })
}
