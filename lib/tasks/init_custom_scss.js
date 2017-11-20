'use strict'

/**
 * Dependencies
 */

const fs = require('fs')

/**
 * Ensure scss/_custom.scss file exists
 */

fs.writeFile('./tmp/bootstrap/scss/_custom.scss', '', {
  "encoding": 'utf8',
  "mode": 0o664,
  "flag": 'wx'
}, (err) => {
  if (err) {
    if (err.code === 'EEXIST') { return; }
    throw err
  }
})

/**
 * Ensure custom scss is imported
 */

// grep -q -F '@import \"custom\";' tmp/bootstrap/scss/bootstrap.scss
//
// || sed -i '0,/^@import/ s/^@import/@import \"custom\";\\n@import/'
//    tmp/bootstrap/scss/bootstrap.scss
