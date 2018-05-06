"use strict"

/**
 * Dependencies
 */

const fs = require("fs")
const child_process = require("child_process")

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

rmdir_rf("./tmp/bootstrap")

/**
 * Clone the bootstrap repo
 */

child_process.spawnSync("git", ["clone", "--quiet", "https://github.com/twbs/bootstrap", "tmp/bootstrap"])
