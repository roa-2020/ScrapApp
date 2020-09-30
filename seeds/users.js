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
            username: 'phil-chan',
            name: 'Phil',
            password: '123',
            user_rating: 10,
            profilepic: "phil1.png"
          },
          {
            id: 2,
            username: 'steven-delacy',
            name: 'Steven',
            password: '123',
            user_rating: 10,
            profilepic: "steven2.png"
          },
          {
            id: 3,
            username: 'camshaw11',
            name: 'Cam',
            password: '123',
            user_rating: 10,
            profilepic: "cam3.png"
          },
          {
            id: 4,
            username: 'lewis-rosenberg-smith',
            name: 'Lewis',
            password: '123',
            user_rating: 10,
            profilepic: "lewis4.png"
          },
          {
            id: 5,
            username: 'seamus-ahkit',
            name: 'Seamus',
            password: '123',
            user_rating: 10,
            profilepic: "seamus5.png"
          },
          {
            id: 6,
            username: 'Connor-ONeale',
            name: 'Connor',
            password: '123',
            user_rating: 10,
            profilepic: "connor6.png"
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