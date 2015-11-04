module.exports = {
  isString: function (s) {
    return typeof(s) === 'string' || s instanceof String;
  },
  isArray: function (s) {
    return s instanceof Array;
  }
}
