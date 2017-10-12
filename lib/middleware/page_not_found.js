module.exports = (req, res, next) => {
  let err = new Error()
  err.status  = 404
  err.message = 'Not found'
  next(err)
}
