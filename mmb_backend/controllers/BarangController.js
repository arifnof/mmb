const barangModel = require('../models/BarangModel')

async function getAll(req, res) {
  try {
    const result = await barangModel.ambilSemua()
    res.json({ data: result })
  } catch (error) {
    console.log('Error : ', error)
    res.status(500).json({ message: 'Error saat mengambil data barang' })
  }
}

async function getById(req, res) {
  try {
    const id = req.params.id
    const result = await barangModel.ambilBerasarkanId(id)
    res.json({ data: result })
  } catch (error) {
    console.log('Error : ', error)
    res
      .status(500)
      .json({ message: 'Error saat mengambil data barang berdasarkan ID ' })
  }
}

async function create(req, res) {
  try {
    const dataBaru = req.body
    const result = await barangModel.tambah(dataBaru)
    res.json({ message: 'Berhasil menambahkan data barang' })
  } catch (error) {
    console.log('Error : ', error)
    res.status(500).json({ message: 'Error saat menambahkan data barang ' })
  }
}

async function update(req, res) {
  try {
    const id = req.params.id
    const dataUpdate = req.body
    const result = await barangModel.ubah(id, dataUpdate)
    res.json({ message: 'Berhasil mengubah data barang' })
  } catch (error) {
    console.log('Error : ', error)
    res.status(500).json({ message: 'Error saat mengubah data barang ' })
  }
}

async function destroy(req, res) {
  try {
    const id = req.params.id
    const result = await barangModel.hapus(id)
    res.json({ message: 'Berhasil menghapus data barang ' })
  } catch (error) {
    console.log('Error : ', error)
    res.status(500).json({ message: 'Error saat menghapus data barang ' })
  }
}

module.exports = { getAll, getById, create, update, destroy }
