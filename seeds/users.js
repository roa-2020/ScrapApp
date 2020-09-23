const { generateHash } = require('authenticare/server')

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all(
        [
          {
            id: 1,
            username: 'admin',
            password: 'Krang',
          }
        ].map(user => {
          return generateHash(user.password)
            .then(hash => {
              user.hash = hash
              delete user.password
              return user
            })
        }))
        .then(users => {
          return knex('users').insert(users)
        })
    })
}
