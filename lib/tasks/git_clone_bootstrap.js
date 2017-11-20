'use strict'

/**
 * Dependencies
 */

const fs = require('fs')

/**
 * Remove any existing bootstrap repo
 */

function rmdir_rf(path) {
  if (fs.existsSync(path)) {
    fs.readdirSync(path).forEach((file, index) => {
      let current_path = path + "/" + file
      if (fs.lstatSync(current_path).isDirectory()) {
        rmdir_rf(current_path)
      } else {
        fs.unlinkSync(current_path)
      }
    })
    fs.rmdirSync(path)
  }
}
rmdir_rf('./tmp/bootstrap')

// git clone --quiet https://github.com/twbs/bootstrap tmp/bootstrap
