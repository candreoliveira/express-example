module.exports = {
  hasField: function(name, comparable) {
    return function(req, res, next) {
      if (req.body && req.body[name] && comparable(req.body[name])) {
        next();
      } else {
        var error = new Error('Field ' + name + ' is invalid.');
        error.status = 400;
        next(error);
      }
    }
  }
}
