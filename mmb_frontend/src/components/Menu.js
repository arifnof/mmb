import MenuItem from "./MenuItem"

const Menu = (props) => {
  const menuList = [
    {
      id: "dashboard",
      text: "Dashboard",
      classIcon: "bx bx-home-alt",
    },
    {
      id: "barang",
      text: "List Barang",
      classIcon: "bx bx-cube-alt",
    },
    {
      id: "pegawai",
      text: "List Pegawai",
      classIcon: "bx bxs-user-badge",
    },
    {
      id: "customer",
      text: "List Customers",
      classIcon: "bx bxs-user-detail",
    },
    {
      id: "supplier",
      text: "List Suppliers",
      classIcon: "bx bxs-factory",
    },
    {
      id: "laporan_penjualan",
      text: "Laporan Penjualan",
      classIcon: "bx bx-file",
    },
  ]

  return (
    <div className="menu">
      <li className="search-box">
        <i
          className="bx bx-search icon"
          onClick={props.onSearchBoxClick}
        ></i>
        <input
          type="text"
          placeholder="Search..."
        />
      </li>

      <ul className="menu-links">
        {menuList.map((item) => {
          return (
            <MenuItem
              key={item.id}
              {...item}
              isActive={props.selectedMenu === item.id}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default Menu
