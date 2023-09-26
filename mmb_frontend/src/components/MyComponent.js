import React from 'react'

function MyComponent() {
  const nama = 'Arif NOfyan'
  let a = 5
  let b = 6
  let hasil = 5 * 6

  return (
    <React.Fragment>
      <p>Komponen pertama saya!</p>
      <p>Paragraf ke 2</p>
      <p>made by {nama} @ 2023 </p>
      <p>Hasil : {hasil}</p>
    </React.Fragment>
  )
}

export default MyComponent
