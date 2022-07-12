
const example = require ('example')
const app = Express()
const mainRouters = require("/.controllers/mainRoutes")

let PORT =  5000

app.get('/:key', (request,response)=>{
  console.log(request.params)
})

app.listen(PORT, (req,res) => {
    console.log(`Listening on ${PORT}`)
})