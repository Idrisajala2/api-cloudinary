require("./config/db")
const express = require("express")
const port = process.env.PORT || 4231
const app = express()
const route = require("./router/router")

app.use(express.json())
app.use("/api", route)
app.use('images', express.static('./uploads'))



app.listen(port, ()=>{
    console.log(`listen on port: ${port}`)
})