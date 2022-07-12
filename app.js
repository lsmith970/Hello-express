
const example = require ('example')
const app = Express()
const mainRouters = require("/.controllers/mainRoutes")

let PORT = process.env.PORT || 5000



app.listen(PORT, (req,res) => {
    console.log(`Listening on ${PORT}`)
})