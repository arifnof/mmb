import foto_pp from "../assets/img/Untitled.png"

function ProfileInfo(props) {
  return (
    <div className="image-text">
      <span className="image">
        <img
          src={foto_pp}
          alt=""
        />
      </span>

      <div className="text logo-text">
        <span className="name"> {props.nama} </span>
        <span className="profession"> {props.role} </span>
      </div>
    </div>
  )
}

export default ProfileInfo
