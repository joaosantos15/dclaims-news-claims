const SingleClaim = require('./singleClaim')
const BatchClaim = require('./batchClaim')

exports = module.exports

exports.SingleClaim = SingleClaim.SingleClaim
exports.BatchClaim = BatchClaim.BatchClaim

/*
var issuerId = 'hello', articleId = 'hello', category = 'hello', freeText = 'hello'

// var a = exports.SingleClaim(issuerId, articleId, category, freeText)
var a = new exports.SingleClaim(issuerId, articleId, category, freeText)
var b = new exports.SingleClaim(issuerId, articleId, category, freeText)

console.log(a instanceof exports.BatchClaim)
*/
