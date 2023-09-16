const barangModel = require("../models/BarangModel")

async function getAll(req, res) {
  try {
    const result = await barangModel.getAll()
    res.json({ data: result })
  } catch (error) {
    console.log("Error : ", error)
    res.status(500).json({ message: "Error saat mengambil data barang" })
  }
}

module.exports = { getAll }
