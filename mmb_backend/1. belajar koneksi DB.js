const express = require("express")
const app = express()
const port = 5005
const db = require("./config/database")

app.get("/", (request, response) => {
  response.send("Hello, ini halaman pertama saya menggunakan ExpressJS !!")
})

app.get("/api/data_dummy", (req, res) => {
  res.json([{ nama: "arif" }, { nama: "john" }])
})

const data_pembelian_dummy = {
  data: [
    {
      id: 1,
      nama: "Alfreds Futterkiste ",
      total_pembelian: 398000,
    },
    {
      id: 2,
      nama: "Ana Trujillo ",
      total_pembelian: 10000,
    },
    {
      id: 3,
      nama: "Antonio Moreno ",
      total_pembelian: 312000,
    },
    {
      id: 4,
      nama: "Arnof",
      total_pembelian: null,
    },
  ],
}

app.get("/api/laporan/pembelian_dummy", (req, res) => {
  res.json(data_pembelian_dummy)
})

// end point untuk mendapatkan data Semua Pegawai
app.get("/api/pegawai", async (req, res) => {
  try {
    // buka koneksi ke DB
    const conn = await db.getConnection()
    // jalankan query SELECT
    const [rows, fields] = await conn.execute("SELECT * FROM Pegawai")
    // lepas koneksi DB
    conn.release()
    // tampilkan ke
    res.status(200).json({ data: rows })
  } catch (error) {
    // tampilkan error di terminal
    console.log("Erorr : ", error)
    // tampilkan error di user
    res.status(500).json({ error: "Error saat mengambil data pegawai!" })
  }
})

app.listen(port, () => {
  console.log(`Server up and running on port ${port} ...`)
})
