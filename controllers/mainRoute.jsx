const router= require("express").Router()

router.get("/", (req, res) => {
    res.sendFile("/public/index.html",
    {root:process.cwd()})
})

router.get("/lostinspace", (req, res) => {
    res.sendFile( "/public/lostinspace.html",
    {root:process.cwd()})
})
router.get("/snakefarm", (req, res) => {
    res.sendFile("/public/snakefarm.html",
    {root:process.cwd()})
})
app.use(mainRouters)

app.use(express.static('public'))

module.exports = router
