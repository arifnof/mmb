import foto_pp from '../assets/img/Untitled.png'

function ProfileInfo(props) {
  return (
    <div class="image-text">
      <span class="image">
        <img src={foto_pp} alt="" />
      </span>

      <div class="text logo-text">
        <span class="name"> {props.nama} </span>
        <span class="profession"> {props.role} </span>
      </div>
    </div>
  )
}

export default ProfileInfo
