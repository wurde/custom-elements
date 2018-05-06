"use strict"

/**
 * Dependencies
 */

const fs = require("fs")

/**
 * Ensure scss/_custom.scss file exists
 */

fs.writeFile("./tmp/bootstrap/scss/_custom.scss", "", {
  "encoding": "utf8",
  "mode": 0o664,
  "flag": "wx"
}, (err) => {
  if (err) {
    if (err.code === 'EEXIST') { return; }
    throw err
  }
})

/**
 * Ensure custom scss is imported
 */

fs.readFile("./tmp/bootstrap/scss/bootstrap.scss", "utf8", (err, data) => {
  if (err) { throw err }

  if (!data.match('@import "custom";')) {
    fs.writeFile("./tmp/bootstrap/scss/bootstrap.scss", "@import \"custom\";\n", {
      "encoding": "utf8",
      "mode": 0o664,
      "flag": "a+"
    }, (err) => {
      if (err) { throw err }
    })
  }
})
