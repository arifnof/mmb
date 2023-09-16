const pegawaiModel = require("../models/PegawaiModel")

async function getAll(req, res) {
  try {
    const result = await pegawaiModel.ambilSemua()
    res.json({ data: result })
  } catch (error) {
    console.log("Error : ", error)
    res.status(500).json({ message: "Error saat mengambil data pegawai" })
  }
}

async function getById(req, res) {
  try {
    const id = req.params.id
    const result = await pegawaiModel.ambilBerasarkanId(id)
    res.json({ data: result })
  } catch (error) {
    console.log("Error : ", error)
    res
      .status(500)
      .json({ message: "Error saat mengambil data pegawai berdasarkan NRP " })
  }
}

async function create(req, res) {
  try {
    const dataBaru = req.body
    const result = await pegawaiModel.tambah(dataBaru)
    res.json({ message: "Berhasil menambahkan data Pegawai" })
  } catch (error) {
    console.log("Error : ", error)
    res.status(500).json({ message: "Error saat menambahkan data Pegawai " })
  }
}

async function update(req, res) {
  try {
    const id = req.params.id
    const dataUpdate = req.body
    const result = await pegawaiModel.ubah(id, dataUpdate)
    res.json({ message: "Berhasil mengubah data Pegawai" })
  } catch (error) {
    console.log("Error : ", error)
    res.status(500).json({ message: "Error saat mengubah data Pegawai " })
  }
}

async function destroy(req, res) {
  try {
    const id = req.params.id
    const result = await pegawaiModel.hapus(id)
    res.json({ message: "Berhasil menghapus data Pegawai " })
  } catch (error) {
    console.log("Error : ", error)
    res.status(500).json({ message: "Error saat menghapus data Pegawai " })
  }
}

module.exports = { getAll, getById, create, update, destroy }
