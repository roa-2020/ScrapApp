const express = require ("express")
const db = require ("")
const router = express.Router()


// ** GET ROUTE ** //

router.get("/", (req, res) => {
    db.getScrap()
    .then((scrap) => res.json(scrap))
})

// ** POST ROUTE ** //

router.post("/", (req, res) => {
    db.addScrap(req.body)
    .then((scrap) => res.json(scrap))
})

// ** PATCH ROUTE ** //

router.patch("/:id", (req, res) => {
    db.updateScrap(req.params.id, req.body)
    .then((scrap) => res.json(scrap))
})


// ** DELETE ROUTE ** //

router.delete("/:id", (req, res) => {
    const id = Number (req.params.id)
    console.log(id)
    db.delete(id)
    .then((scrap) => res.json(scrap))
})