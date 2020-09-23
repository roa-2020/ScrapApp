const connection = require('./connection')

function g(id, db = connection) {
  return db('users')
    .where('id', id)
    .first()
}

function getScrap(db = connection) {
  return db('scraps')
    .select()
}

module.exports = {

}