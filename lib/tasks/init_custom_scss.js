"use strict"

/**
 * Dependencies
 */

const fs = require("fs")

/**
 * Remove any existing files
 */

if (fs.existsSync("./tmp/custom.scss")) {
  fs.unlinkSync("./tmp/custom.scss")
}

/**
 * Ensure custom.scss file exists.
 */

fs.writeFile("./tmp/custom.scss", "// Drink the Sea", {
  "encoding": "utf8",
  "mode": 0o664,
  "flag": "wx"
}, (err) => {
  if (err) {
    if (err.code === 'EEXIST') { return; }
    throw err
  }
})
