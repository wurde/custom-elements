const path = require('path')

module.exports = (req, res, next) => {
  if (req.url !== '/favicon.ico') { next(); return }
  res.sendFile(path.join(req.app.locals.base, 'public', 'favicon.ico'), {
    'maxAge': '1y',
    'immutable': true,
    'lastModified': false
  })
}
