import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./components/Login"
import Page from "./components/Page"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Page selectedMenu="" />}
          ></Route>
          <Route
            path="/login"
            element={<Login />}
          ></Route>
          <Route
            path="/dashboard"
            element={<Page selectedMenu="dashboard" />}
          ></Route>
          <Route
            path="/barang"
            element={<Page selectedMenu="barang" />}
          ></Route>
          <Route
            path="/pegawai"
            element={<Page selectedMenu="pegawai" />}
          ></Route>
          <Route
            path="/customer"
            element={<Page selectedMenu="customer" />}
          ></Route>
          <Route
            path="/supplier"
            element={<Page selectedMenu="supplier" />}
          ></Route>
          <Route
            path="/laporan_penjualan"
            element={<Page selectedMenu="laporan_penjualan" />}
          ></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
