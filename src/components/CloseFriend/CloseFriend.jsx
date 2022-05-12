import "./closeFriend.scss"

export default function CloseFriend({ friend }) {
  return (
    <li className="sidebarFriend">
        <img className="sidebarFriendImg" src={friend.profilePicture} alt="" />
        <span className="sidebarFriendName sm-left-margin-10">{friend.username}</span>
    </li>
  )
}
