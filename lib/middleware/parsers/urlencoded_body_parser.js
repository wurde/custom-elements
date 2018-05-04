"use strict"

/**
 * Dependencies
 */

const express = require("express")

/**
 * Export middleware.
 */

module.exports = express.urlencoded({ extended: true })
