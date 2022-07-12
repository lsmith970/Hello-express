const router = require("express").Router()

router.get("/example", (req,res) => {
    res.send("Hello, home!")
})

router.get("/tigerpit", (req, res) => {
    res.send(`You've fallen in the ${tigerpit}`)
})
router.get("/boobytrap", (req, res) => {
    res.send(`You are in the ${boobytrap}`)
})
router.get("/snakefarm", (req, res) => {
    res.send(`Welcome to the ${snakefarm}, it's a reptile house`)
})



module.exports = router