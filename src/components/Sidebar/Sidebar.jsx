import { 
    RssFeed, 
    Event, 
    HelpOutline, 
    WorkOutline, 
    PlayCircleFilledOutlined,
    Group,
    Bookmark,
    Chat,
    ExitToApp
} from "@material-ui/icons"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { Logout } from "../../context/AuthActions"
import { removeStorage, KEYS } from "../../helpers/Helper"
import CloseFriend from "../CloseFriend/CloseFriend"
import { Link } from "react-router-dom"
import "./sidebar.scss";

export default function Sidebar() {
    const { dispatch } = useContext(AuthContext);

    const handleLogout = () => {
        removeStorage(KEYS.CURRENT_USER);
        dispatch(Logout());
    }
    return (
        <div className="sidebar">
            <div className="sm-padding-20">
                <ul className="sm-list-style">
                    <li className="sidebarListItem">
                        <Link to={`under-construction`} className="sidebarLink">
                            <RssFeed className="sidebarIcon" />
                            <span className="sidebarListItemText">Feed</span>
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <Link to={`under-construction`} className="sidebarLink">
                            <Chat className="sidebarIcon" />
                            <span className="sidebarListItemText">Chats</span>
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <Link to={`under-construction`} className="sidebarLink">
                            <PlayCircleFilledOutlined className="sidebarIcon" />
                            <span className="sidebarListItemText">Videos</span>
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <Link to={`under-construction`} className="sidebarLink">
                            <Group className="sidebarIcon" />
                            <span className="sidebarListItemText">Groups</span>
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <Link to={`under-construction`} className="sidebarLink">
                            <Bookmark className="sidebarIcon" />
                            <span className="sidebarListItemText">Bookmarks</span>
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <Link to={`under-construction`} className="sidebarLink">
                            <HelpOutline className="sidebarIcon" />
                            <span className="sidebarListItemText">Questions</span>
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <Link to={`under-construction`} className="sidebarLink">
                            <WorkOutline className="sidebarIcon" />
                            <span className="sidebarListItemText">Jobs</span>
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <Link to={`under-construction`} className="sidebarLink">
                            <Event className="sidebarIcon" />
                            <span className="sidebarListItemText">Events</span>
                        </Link>
                    </li>
                    <li className="sidebarListItem" onClick={handleLogout}>
                        <ExitToApp className="sidebarIcon" />
                        <span className="sidebarListItemText">Log out</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sm-top-margin-20 sm-bottom-margin-20" />
                {/* <ul className="sm-list-style">
                    {
                        Users.map(u => (
                            <CloseFriend key={u.id} friend={u} />
                        ))
                    }
                </ul> */}
            </div>
        </div>
    )
}