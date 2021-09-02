const compress = require('graphql-query-compress')

module.exports = function(source) {
  return compress(source)
}
