import "./sidebar.scss";
import { 
    RssFeed, 
    School, 
    Event, 
    HelpOutline, 
    WorkOutline, 
    PlayCircleFilledOutlined,
    Group,
    Bookmark,
    Chat
} from "@material-ui/icons"

import CloseFriend from "../CloseFriend/CloseFriend"
import { Users } from "../../dummyData"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sm-padding-20">
                <ul className="sidebarList">
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
                    <li className="sidebarListItem">
                        <School className="sidebarIcon" />
                        <span className="sidebarListItemText">Courses</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sm-top-margin-20 sm-bottom-margin-20" />
                <ul className="sidebarFriendList">
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