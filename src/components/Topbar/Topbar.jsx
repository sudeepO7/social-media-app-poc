import { useContext } from 'react'
import { Search, Person, Chat, Notifications } from "@material-ui/icons"
import { AuthContext } from '../../context/AuthContext'
import { mUrl } from "../../helpers/Helper"
import { Link } from "react-router-dom"
import "./topbar.scss";

export default function Topbar() {
    const { appTitle, user } = useContext(AuthContext);
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to="/" style={{textDecoration: "none"}}>
                    <span className="logo">{appTitle}</span>
                </Link>
            </div>
            <div className="topbarCenter">
                <div className="searchBar">
                    <Search className="searchIcon" />
                    <input placeholder="Search friend, post or video" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <Link to="/" style={{textDecoration: "none"}}><span className="topbarLink">Homepage</span></Link>
                    <Link to="/profile" style={{textDecoration: "none"}}><span className="topbarLink">Timeline</span></Link>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <Link to="/profile" style={{textDecoration: "none"}}>
                    <img src={user.profilePicture ? mUrl(user.profilePicture) : mUrl('person/noAvatar.png')} alt="img" className="sm-profile-image-32 topbarProfileImg" />
                </Link>
            </div>
        </div>
    )
}