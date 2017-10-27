const path = require('path')
const fs = require('fs')

module.exports = (req, res, next) => {
  let custom_scss_path = path.join(__root, '/tmp/bootstrap/scss/_custom.scss')
  if (fs.existsSync(custom_scss_path)) {
    next()
  } else {
    res.status(400).send('npm run setup')
  }
}
