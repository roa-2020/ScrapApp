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
            username: 'phil',
            name: 'Phil',
            password: '123',
            user_rating: 10,
            profilepic: "phil1"
          },
          {
            id: 2,
            username: 'steven',
            name: 'Steven',
            password: '123',
            user_rating: 10,
            profilepic: "steven2"
          },
          {
            id: 3,
            username: 'cam',
            name: 'Cam',
            password: '123',
            user_rating: 10,
            profilepic: "cam3"
          },
          {
            id: 4,
            username: 'lewis',
            name: 'Lewis',
            password: '123',
            user_rating: 10,
            profilepic: "lewis4"
          },
          {
            id: 5,
            username: 'seamus',
            name: 'Seamus',
            password: '123',
            user_rating: 10,
            profilepic: "seamus5"
          },
          {
            id: 6,
            username: 'connor',
            name: 'Connor',
            password: '123',
            user_rating: 10,
            profilepic: "connor6"
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