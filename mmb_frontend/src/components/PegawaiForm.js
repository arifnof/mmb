import { useState } from "react"

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

  const inputChangedHandler = (event) => {
    const name = event.target.name
    const value = event.target.value
    setDataPegawai({ ...dataPegawai, [name]: value })
  }

  const btnCancelHandler = (event) => {
    event.preventDefault()
    setDataPegawai(defaultData)
    props.onCancelClick()
  }

  const btnSimpanHandler = (event) => {
    console.log(dataPegawai)
  }

  return (
    <>
      <h3>Formulir Tambah Data Pegawai</h3>
      <div className="control">
        <label>NRP</label>
        <input
          type="text"
          name="nrp"
          value={dataPegawai.nrp}
          onChange={inputChangedHandler}
        />
      </div>
      <div className="control">
        <label>Nama</label>
        <input
          type="text"
          name="nama"
          value={dataPegawai.nama}
          onChange={inputChangedHandler}
        />
      </div>
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
          <option value="L">Laki</option>
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
    </>
  )
}

export default PegawaFrom
