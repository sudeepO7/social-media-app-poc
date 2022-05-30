import "./online.scss"
import { dpUrl } from "../../helpers/Helper"

export default function Online({ user }) {
  return (
    <li className="rightbarFriend">
        <div className="rightbarProfileImgContainer">
            <img src={dpUrl(user.profilePicture)} alt="" className="sm-profile-image-40" />
            <span className="rightbarOnline"></span>
        </div>
        <div className="rightbarUsername">{user.username}</div>
    </li>
  )
}
