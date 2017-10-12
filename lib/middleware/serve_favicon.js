const path = require('path')

module.exports = (app) => {
  return (req, res, next) => {
    if (req.url !== '/favicon.ico') { next(); return }
    res.sendFile(path.join(app.locals.root, 'public', 'favicon.ico'), {
      'maxAge': '1y',
      'immutable': true,
      'lastModified': false
    })
  }
}
