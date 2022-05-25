import { useContext } from 'react'
import { Search, Person, Chat, Notifications } from "@material-ui/icons"
import { AuthContext } from '../../context/AuthContext'
import { mUrl } from "../../helpers/Helper"
import { Link } from "react-router-dom"
import "./topbar.scss";

export default function Topbar() {
    const { appTitle } = useContext(AuthContext);
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
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
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
                <img src={mUrl('person/1.jpeg')} alt="img" className="sm-profile-image-32 topbarProfileImg" />
            </div>
        </div>
    )
}