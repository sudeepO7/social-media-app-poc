import "./online.scss"

export default function Online({ user }) {
  return (
    <li className="rightbarFriend">
        <div className="rightbarProfileImgContainer">
            <img src={user.profilePicture} alt="" className="sm-profile-image-40" />
            <span className="rightbarOnline"></span>
        </div>
        <div className="rightbarUsername">{user.username}</div>
    </li>
  )
}
