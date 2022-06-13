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
import CloseFriend from "../CloseFriend/CloseFriend"
import { Users } from "../../dummyData"
import "./sidebar.scss";

export default function Sidebar() {
    const { dispatch } = useContext(AuthContext);

    const handleLogout = () => {
        dispatch(Logout());
    }
    return (
        <div className="sidebar">
            <div className="sm-padding-20">
                <ul className="sm-list-style">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon" />
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className="sidebarIcon" />
                        <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <PlayCircleFilledOutlined className="sidebarIcon" />
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <Group className="sidebarIcon" />
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmark className="sidebarIcon" />
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <HelpOutline className="sidebarIcon" />
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkOutline className="sidebarIcon" />
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className="sidebarIcon" />
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem" onClick={handleLogout}>
                        <ExitToApp className="sidebarIcon" />
                        <span className="sidebarListItemText">Log out</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sm-top-margin-20 sm-bottom-margin-20" />
                <ul className="sm-list-style">
                    {
                        Users.map(u => (
                            <CloseFriend key={u.id} friend={u} />
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}