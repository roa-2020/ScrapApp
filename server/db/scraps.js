const connection = require('./connection')

function getScraps(db = connection) {
  return db('scraps')
    .select()
    .then(scraps => scraps.map(scrap => {
      scrap.latitude = Number(scrap.latitude)
      scrap.longtude = Number(scrap.longitude)
      return scrap
    }))
}

function addScrap(scrap, db = connection) {
  return db('scraps')
    .insert(scrap)
}

function updateScrap(id, newScrapData, db = connection) {
  return db('scraps')
    .where('id', id)
    .update(newScrapData)
}

function deleteScrap(id, db = connection) {
  return db('scraps')
    .where('id', id)
    .del()
}

module.exports = {
  getScraps,
  addScrap,
  updateScrap,
  deleteScrap
}