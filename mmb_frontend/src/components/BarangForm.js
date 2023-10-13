import React, { useEffect, useState } from "react"

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

  useEffect(() => {
    if (props.modeUbah === false) {
      setDataBarang(defaultData) // menampilkan form kosong
    } else if (props.modeUbah === true) {
      setDataBarang(props.dataBarang) // menampilkan form sesuai data barang yg mau di edit
    }
  }, [props.modeUbah, props.dataBarang])

  //   console.log(dataBarang)

  const btnSimpanHandler = (event) => {
    event.preventDefault()
    // simpan ke database

    // lepas ID
    const { id, ...dataSiapDisimpan } = dataBarang

    // kirim ke parent untuk di simpan ke DB
    props.onSimpanClick(dataSiapDisimpan)

    console.log(dataSiapDisimpan)
    // reset form
    setDataBarang(defaultData)
  }

  const btnCancelHandler = (event) => {
    event.preventDefault()
    // reset form
    setDataBarang(defaultData)
    props.onCancelClick() // untuk meng-close modal
  }

  const btnSimpanPerubahanHandler = (event) => {
    event.preventDefault()
    const { id, ...dataSiapDisimpan } = dataBarang
    props.onSimpanPerubahanClick(id, dataSiapDisimpan) //
  }

  const title = props.modeUbah
    ? "Formulir Ubah Data Barang"
    : "Formulir Tambah Data Barang"

  return (
    <>
      <h3>{title}</h3>
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
          {!props.modeUbah && (
            <button
              className="button"
              onClick={btnSimpanHandler}
            >
              Simpan Tambah Baru
            </button>
          )}
          {props.modeUbah && (
            <button
              className="button"
              onClick={btnSimpanPerubahanHandler}
            >
              Simpan Perubahan
            </button>
          )}
        </div>
      </form>
    </>
  )
}

export default BarangForm
