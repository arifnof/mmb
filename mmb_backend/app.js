const express = require("express")
const app = express()
const port = 5005
const apiRoutes = require("./routes/api")

// Parse JSON request body
app.use(express.json())

app.get("/", (request, response) => {
  response.send("Hello, ini halaman ExpressJS pertama saya !!")
})

app.use("/api", apiRoutes)

app.listen(port, () => {
  console.log(`Server up and running on http://localhost:${port} ...`)
})
