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
          <Route
            path="/error_boundary"
            element={<Page selectedMenu="error_boundary" />}
          ></Route>
          <Route
            path="*"
            element={<Page selectedMenu="not_found" />}
          ></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
