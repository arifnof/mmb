import { useEffect, useState } from "react"

const defaultData = {
  nrp: "",
  nama: "",
  tanggal_lahir: "",
  jenis_kelamin: "",
  tempat_tinggal: "",
  gaji: 0,
}

const PegawaFrom = (props) => {
  const [dataPegawai, setDataPegawai] = useState(defaultData)

  const [nrpIsValid, setNrpIsValid] = useState(false)
  const [nrpMessage, setNrpMessage] = useState("")

  const [namaIsValid, setNamaIsValid] = useState(false)
  const [namaMessage, setNamaMessage] = useState("")

  const [gajiIsValid, setGajiIsValid] = useState(false)
  const [gajiMessage, setGajiMessage] = useState("")

  const inputChangedHandler = (event) => {
    const name = event.target.name
    const value = event.target.value
    setDataPegawai({ ...dataPegawai, [name]: value })
  }

  useEffect(() => {
    if (dataPegawai.nrp === "") {
      setNrpIsValid(false)
      setNrpMessage("NRP harus diisi")
    } else {
      setNrpIsValid(true)
      setNrpMessage("")
    }

    if (dataPegawai.nama === "" || dataPegawai.nama.length < 3) {
      setNamaIsValid(false)
      setNamaMessage("Nama Pegawai harus diisi, minimal 3 karakter")
    } else {
      setNamaIsValid(true)
      setNamaMessage("")
    }

    // console.log(dataPegawai.gaji)
    if (dataPegawai.gaji === "") {
      setGajiIsValid(false)
      setGajiMessage("Gaji harus diisi")
    } else {
      if (isNaN(dataPegawai.gaji)) {
        // jika dataPegawai.gaji bukan angka, maka gajiIsValid = false
        setGajiIsValid(false)
        setGajiMessage("Gaji harus berupa Angka")
      } else {
        // jika dataPegawai.gaji angka, maka gajiIsValid = true
        setGajiIsValid(true)
        setGajiMessage("")
      }
    }
  }, [dataPegawai])

  useEffect(() => {
    if (props.modeUbah === false) {
      setDataPegawai(defaultData) // menampilkan form kosong
    } else if (props.modeUbah === true) {
      setDataPegawai(props.dataPegawai) // menampilkan form sesuai data barang yg mau di edit
    }
  }, [props.modeUbah, props.dataPegawai])

  //   console.log(dataPegawai)

  const btnSimpanHandler = (event) => {
    event.preventDefault()
    // simpan ke database

    if (gajiIsValid && namaIsValid) {
      // lepas ID
      const { id, ...dataSiapDisimpan } = dataPegawai

      // kirim ke parent untuk di simpan ke DB
      props.onSimpanClick(dataSiapDisimpan)

      console.log(dataSiapDisimpan)
      // reset form
      setDataPegawai(defaultData)
    }
  }

  const btnCancelHandler = (event) => {
    event.preventDefault()
    // reset form
    setDataPegawai(defaultData)
    props.onCancelClick() // untuk meng-close modal
  }

  const btnSimpanPerubahanHandler = (event) => {
    event.preventDefault()

    if (gajiIsValid && namaIsValid) {
      const { id, ...dataSiapDisimpan } = dataPegawai
      props.onSimpanPerubahanClick(id, dataSiapDisimpan) //
    }
  }

  const title = props.modeUbah
    ? "Formulir Ubah Data Pegawai"
    : "Formulir Tambah Data Pegawai"

  return (
    <>
      <h3>{title}</h3>
      <form className="form-control">
        <div className="control">
          <label>NRP</label>
          <input
            type="text"
            name="nrp"
            value={dataPegawai.nrp}
            onChange={inputChangedHandler}
          />
        </div>
        {!nrpIsValid && <p className="error-text">{nrpMessage}</p>}
        <div className="control">
          <label>Nama</label>
          <input
            type="text"
            name="nama"
            value={dataPegawai.nama}
            onChange={inputChangedHandler}
          />
        </div>
        {!namaIsValid && <p className="error-text">{namaMessage}</p>}
        <div className="control">
          <label>Tgl Lahir</label>
          <input
            type="text"
            name="tanggal_lahir"
            value={dataPegawai.tanggal_lahir}
            onChange={inputChangedHandler}
          />
        </div>
        <div className="control">
          <label>JK</label>
          <select
            onChange={inputChangedHandler}
            value={dataPegawai.jenis_kelamin}
          >
            <option value="L">Laki-laki</option>
            <option value="P">Perempuan</option>
          </select>
        </div>
        <div className="control">
          <label>Tempat Tinggal </label>
          <input
            type="text"
            name="tempat_tinggal"
            value={dataPegawai.tempat_tinggal}
            onChange={inputChangedHandler}
          />
        </div>
        <div className="control">
          <label>Gaji </label>
          <input
            type="text"
            name="gaji"
            value={dataPegawai.gaji}
            onChange={inputChangedHandler}
          />
        </div>
        {!gajiIsValid && <p className="error-text">{gajiMessage}</p>}
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

export default PegawaFrom
