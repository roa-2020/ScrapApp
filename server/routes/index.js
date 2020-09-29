const express = require("express")
const usersDb = require('../db/users')
const scrapsDb = require('../db/scraps')
const router = express.Router()

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

router.post("/", (req, res) => {
    scrapsDb.addScrap(req.body)
        .then((scrap) => res.json(scrap))
})

// ** SCRAP - PATCH ROUTE ** //

router.patch("/:id", (req, res) => {
    scrapsDb.updateScrap(req.params.id, req.body)
        .then((scrap) => res.json(scrap))
})


// ** SCRAP - DELETE ROUTE ** //

router.delete("/:id", (req, res) => {
    const id = Number(req.params.id)
    scrapsDb.deleteScrap(id)
        .then((scrap) => res.json(scrap))
})

module.exports = router