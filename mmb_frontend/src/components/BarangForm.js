import React, { useEffect, useState } from "react"

const defaultData = {
  id: "",
  nama: "",
  satuan: "",
  harga: "",
}

const BarangForm = (props) => {
  const [dataBarang, setDataBarang] = useState(defaultData)

  const [namaIsValid, setNamaIsValid] = useState(false)
  const [namaMessage, setNamaMessage] = useState("")

  const [hargaIsValid, setHargaIsValid] = useState(false)
  const [hargaMessage, setHargaMessage] = useState("")

  const inputChangedHandler = (event) => {
    const name = event.target.name
    const value = event.target.value
    setDataBarang({ ...dataBarang, [name]: value })
  }

  useEffect(() => {
    if (dataBarang.nama === "" || dataBarang.nama.length < 3) {
      setNamaIsValid(false)
      setNamaMessage("Nama Barang harus diisi, minimal 3 karakter")
    } else {
      setNamaIsValid(true)
      setNamaMessage("")
    }

    // console.log(dataBarang.harga)
    if (dataBarang.harga === "") {
      setHargaIsValid(false)
      setHargaMessage("Harga harus diisi")
    } else {
      if (isNaN(dataBarang.harga)) {
        // jika dataBarang.harga bukan angka, maka hargaIsValid = false
        setHargaIsValid(false)
        setHargaMessage("Harga harus berupa Angka")
      } else {
        // jika dataBarang.harga angka, maka hargaIsValid = true
        setHargaIsValid(true)
        setHargaMessage("")
      }
    }
  }, [dataBarang])

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

    if (hargaIsValid && namaIsValid) {
      // lepas ID
      const { id, ...dataSiapDisimpan } = dataBarang

      // kirim ke parent untuk di simpan ke DB
      props.onSimpanClick(dataSiapDisimpan)

      console.log(dataSiapDisimpan)
      // reset form
      setDataBarang(defaultData)
    }
  }

  const btnCancelHandler = (event) => {
    event.preventDefault()
    // reset form
    setDataBarang(defaultData)
    props.onCancelClick() // untuk meng-close modal
  }

  const btnSimpanPerubahanHandler = (event) => {
    event.preventDefault()

    if (hargaIsValid && namaIsValid) {
      const { id, ...dataSiapDisimpan } = dataBarang
      props.onSimpanPerubahanClick(id, dataSiapDisimpan) //
    }
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
        {!namaIsValid && <p className="error-text">{namaMessage}</p>}
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
        {!hargaIsValid && <p className="error-text">{hargaMessage}</p>}
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
