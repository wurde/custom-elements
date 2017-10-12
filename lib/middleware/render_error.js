module.exports = (err, req, res, next) => {
  if (process.env.NODE_ENV == 'production') { err.stack = undefined }
  err.status = (err.status || 500)
  res.status(err.status).render('error', {
    'status': err.status,
    'error': err
  })
}
