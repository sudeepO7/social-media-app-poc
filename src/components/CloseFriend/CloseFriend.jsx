import "./closeFriend.scss"
import { dpUrl } from "../../helpers/Helper"

export default function CloseFriend({ friend }) {
  return (
    <li className="sidebarFriend">
        <img className="sm-profile-image-32" src={dpUrl(friend.profilePicture)} alt="" />
        <span className="sidebarFriendName sm-left-margin-10">{friend.username}</span>
    </li>
  )
}
