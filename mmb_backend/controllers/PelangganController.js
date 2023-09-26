const pelangganModel = require('../models/PelangganModel')

async function getAll(req, res) {
  try {
    const result = await pelangganModel.ambilSemua()
    res.json({ data: result })
  } catch (error) {
    console.log('Error : ', error)
    res.status(500).json({ message: 'Error saat mengambil data pelanggan' })
  }
}

async function getById(req, res) {
  try {
    const id = req.params.id
    const result = await pelangganModel.ambilBerasarkanId(id)
    res.json({ data: result })
  } catch (error) {
    console.log('Error : ', error)
    res
      .status(500)
      .json({ message: 'Error saat mengambil data pelanggan berdasarkan ID ' })
  }
}

async function create(req, res) {
  try {
    const dataBaru = req.body
    const result = await pelangganModel.tambah(dataBaru)
    res.json({ message: 'Berhasil menambahkan data Pelanggan' })
  } catch (error) {
    console.log('Error : ', error)
    res.status(500).json({ message: 'Error saat menambahkan data Pelanggan ' })
  }
}

async function update(req, res) {
  try {
    const id = req.params.id
    const dataUpdate = req.body
    const result = await pelangganModel.ubah(id, dataUpdate)
    res.json({ message: 'Berhasil mengubah data Pelanggan' })
  } catch (error) {
    console.log('Error : ', error)
    res.status(500).json({ message: 'Error saat mengubah data Pelanggan ' })
  }
}

async function destroy(req, res) {
  try {
    const id = req.params.id
    const result = await pelangganModel.hapus(id)
    res.json({ message: 'Berhasil menghapus data Pelanggan ' })
  } catch (error) {
    console.log('Error : ', error)
    res.status(500).json({ message: 'Error saat menghapus data Pelanggan ' })
  }
}

module.exports = { getAll, getById, create, update, destroy }
