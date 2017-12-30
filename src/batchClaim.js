const uuidv4 = require('uuid/v4')
const HYPERCERTS_NAMESPACE = 'hypercerts-news'
const CLAIM_TYPE = 'batch-claim'
const VERSION = '0.0.1'

exports = module.exports

/**
* Get an instance of a BatchClaim object
* @param {string} articleId ID of the news article
* @param {string} issuerId Ethereum address of the Provider
* @param {Array} claimsList Array of SingleClaims objects
* @returns {BatchClaim}
*/

exports.BatchClaim = function (articleId, issuerId, claimsList) {
  this.id = HYPERCERTS_NAMESPACE + '-' + uuidv4()
  this.type = [HYPERCERTS_NAMESPACE + '-' + CLAIM_TYPE + '-' + VERSION]
  this.issuer = issuerId
  this.issued = 'default-yyyy-mm-dd'
  this.claim = new BatchClaimContent(articleId, claimsList)
  this.signature = new SignatureContent()
  this.revocation = new RevocationContent()
}

function BatchClaimContent (articleId, claimsList) {
  this.id = articleId
  this.claimsList = claimsList
}

function SignatureContent () {
  this.type = 'default-something'
  this.created = 'default-timestamp'
  this.creator = 'default-someone'
  this.domain = 'default-something'
  this.nonce = 'default-1234'
  this.signatureValue = 'default-signature'
}

function RevocationContent () {
  this.id = 'default-articleId'
  this.type = 'default-SimpleRevocationList2017'
}
