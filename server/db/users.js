const connection = require('./connection')
const { generateHash } = require('authenticare/server')

function createUser (user, db = connection) {
  const newUser = {...user}
  return generateHash(newUser.password)
    .then(passwordHash => {
      newUser.hash = passwordHash
      delete newUser.password
      return db('users').insert(newUser)
    })
}

function updateUser(id, data, db = connection) {
  console.log(data)
  return db('users')
    .where("id", id)
    .update(data)
}

function userExists (username, db = connection) {
  return db('users')
    .where('username', username)
    .then(users => users.length > 0)
}

function getUserByUsername (username, db = connection) {
  return db('users')
    .where('username', username)
    .first()
}

function getUserById (id, db = connection){
  return db('users')
    .where('id', id)
    .first()
}

module.exports = {
  createUser,
  userExists,
  getUserByUsername,
  getUserById,
  updateUser
}