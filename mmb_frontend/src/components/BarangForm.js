import React, { useState } from "react"

const defaultData = {
  id: "",
  nama: "",
  satuan: "",
  harga: "",
}

const BarangForm = (props) => {
  const [dataBarang, setDataBarang] = useState(defaultData)

  const inputChangedHandler = (event) => {
    const name = event.target.name
    const value = event.target.value
    setDataBarang({ ...dataBarang, [name]: value })
  }

  //   console.log(dataBarang)

  const btnSimpanHandler = (event) => {
    event.preventDefault()
    // simpan ke database
    console.log(dataBarang)
    // reset form
    setDataBarang(defaultData)
  }

  const btnCancelHandler = (event) => {
    event.preventDefault()
    // reset form
    setDataBarang(defaultData)
    props.onCancelClick() // untuk meng-close modal
  }

  return (
    <>
      <h3>Formulir Tambah Data Barang</h3>
      <form className="form-control">
        <div className="control">
          <label>ID Barang</label>
          <input
            type="text"
            name="id"
            value={dataBarang.id}
            disabled
            placeholder="(auto)"
            onChange={inputChangedHandler}
          />
        </div>
        <div className="control">
          <label>Nama Barang</label>
          <input
            type="text"
            name="nama"
            value={dataBarang.nama}
            onChange={inputChangedHandler}
          />
        </div>
        <div className="control">
          <label>Satuan</label>
          <select
            name="satuan"
            value={dataBarang.satuan}
            onChange={inputChangedHandler}
          >
            <option value="pcs">PCS</option>
            <option value="kg">KG</option>
            <option value="liter">Liter</option>
          </select>
        </div>
        <div className="control">
          <label>Harga</label>
          <input
            type="text"
            name="harga"
            value={dataBarang.harga}
            onChange={inputChangedHandler}
          />
        </div>
        <div className="actions">
          <button
            className="button-secondary"
            onClick={btnCancelHandler}
          >
            Cancel
          </button>
          <button
            className="button"
            onClick={btnSimpanHandler}
          >
            Simpan
          </button>
        </div>
      </form>
    </>
  )
}

export default BarangForm
