const express = require("express")

const cors = require("cors")

const app = express()
const port = 5005
const apiRoutes = require("./routes/api")

// cors settings
// const corsOptions = {
//   origin: 'http://localhost:3000',
// };

// enable cors
app.use(cors())
// app.use(cors(corsOptions))

// Parse JSON request body
app.use(express.json())

app.get("/", (request, response) => {
  response.send("Hello, ini halaman ExpressJS pertama saya !!")
})

app.use("/api", apiRoutes)

app.listen(port, () => {
  console.log(`Server up and running on http://localhost:${port} ...`)
})
