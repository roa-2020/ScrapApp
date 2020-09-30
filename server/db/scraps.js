const connection = require('./connection')

function getScraps(db = connection) {
  return db('scraps')
    .select()
    .then(scraps => scraps.map(scrap => {
      scrap.latitude = Number(scrap.latitude)
      scrap.longitude = Number(scrap.longitude)
      return scrap
    }))
}

function addScrap(scrap, db = connection) {
  return db('scraps')
    .insert(scrap)
}

function deleteScrap(id, db = connection) {
  return db('scraps')
    .where('id', id)
    .del()
}

module.exports = {
  getScraps,
  addScrap,
  deleteScrap
}