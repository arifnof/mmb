const db = require('../config/database')

async function ambilSemua() {
  const conn = await db.getConnection()
  try {
    const [rows, fields] = await conn.execute('SELECT * FROM Pelanggan')
    return rows
  } finally {
    conn.release()
  }
}

async function ambilBerasarkanId(id) {
  const conn = await db.getConnection()
  try {
    const [rows, fields] = await conn.execute(
      'SELECT * FROM Pelanggan WHERE id = ? ',
      [id]
    )
    return rows
  } finally {
    conn.release()
  }
}

async function tambah(data) {
  const conn = await db.getConnection()
  try {
    const kolom = Object.keys(data).join(',') // "nrp, nama, tanggal_lahir, jenis_kelamin, tempat_tinggal, gaji"
    const values = Object.values(data) // [202120009, "King Robert", "1990-02-04T17:00:00.000Z", "L", "Bandung", 3492465]
    const tandaTanya = values.map(() => '?').join(',') // "?, ?, ?, ?, ?, ?"
    const query = `INSERT INTO Pelanggan (${kolom}) VALUES (${tandaTanya})`
    const result = await conn.execute(query, values)
    return result
  } finally {
    conn.release()
  }
}

async function ubah(id, data) {
  const conn = await db.getConnection()
  try {
    const updateQuery = Object.keys(data)
      .map((key) => `${key} = ?`)
      .join(',')
    const values = Object.values(data)
    const query = `UPDATE Pelanggan
                  SET ${updateQuery}
                  WHERE id=?;`
    const result = await conn.execute(query, [...values, id])
    return result
  } finally {
    conn.release()
  }
}

async function hapus(id) {
  const conn = await db.getConnection()
  try {
    const result = conn.execute('DELETE FROM Pelanggan WHERE id = ?;', [id])
    return result
  } finally {
    conn.release()
  }
}

module.exports = { ambilSemua, ambilBerasarkanId, tambah, ubah, hapus }
