import React, { useState } from "react"

const Counter = () => {
  const [jumlah, setJumlah] = useState(0)

  const tambahJumlahHandler = () => {
    const dataBaru = jumlah + 1
    setJumlah(dataBaru)
  }

  return (
    <>
      <p>Count: {jumlah}</p>
      <button onClick={tambahJumlahHandler}>Tambah</button>
    </>
  )
}

export default Counter
