const express = require("express")
const usersDb = require('../db/users')
const scrapsDb = require('../db/scraps')
const router = express.Router()
const { getTokenDecoder } = require('authenticare/server')

// ** USER - GET ROUTE ** //

router.get("/user/:id", (req, res) => {
    usersDb.getUserById(req.params.id)
        .then((user) => res.json(user))
})

// ** SCRAP - GET ROUTE ** //

router.get("/", (req, res) => {
    scrapsDb.getScraps()
        .then((scraps) => res.json(scraps))
})

// ** SCRAP - POST ROUTE ** //

router.post("/", getTokenDecoder(), (req, res) => {

    const scrap = {
        category: req.body.category,
        address: req.body.address,
        scrap_name: req.body.scrap_name,
        description: req.body.description,
        longitude: req.body.longitude,
        latitude: req.body.latitude,
        user_id: req.user.id
    }

    scrapsDb.addScrap(scrap)
        .then((scrap) => res.json(scrap))
})

// ** SCRAP - DELETE ROUTE ** //

router.delete("/:id", (req, res) => {
    const id = Number(req.params.id)
    scrapsDb.deleteScrap(id)
        .then((scrap) => res.json(scrap))
})

module.exports = router