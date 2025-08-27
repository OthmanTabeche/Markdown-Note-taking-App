import express from "express"

const app = express()

app.get('/', (req, res) => {
    res.send(`<h1>FUNCIONA !!!<h1>`)
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`App running in port: ${PORT}`)
})