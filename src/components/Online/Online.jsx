import "./online.scss"
import { mUrl } from "../../helpers/Helper"

export default function Online({ user }) {
  return (
    <li className="rightbarFriend">
        <div className="rightbarProfileImgContainer">
            <img src={mUrl(user.profilePicture)} alt="" className="sm-profile-image-40" />
            <span className="rightbarOnline"></span>
        </div>
        <div className="rightbarUsername">{user.username}</div>
    </li>
  )
}
