const db = require("../config/database")

async function getAll() {
  const conn = await db.getConnection()
  try {
    const [rows, fields] = await conn.execute("SELECT * FROM Supplier")
    return rows
  } finally {
    conn.release()
  }
}

module.exports = { getAll }
