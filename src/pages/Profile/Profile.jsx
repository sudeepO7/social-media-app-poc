import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import FeedHoc from "../../HOC/FeedHoc/FeedHoc"
import Sidebar from "../../components/Sidebar/Sidebar"
import Feed from "../../components/Feed/Feed"
import Rightbar from "../../components/Rightbar/Rightbar"
import { get } from "../../helpers/Http"
import { mUrl } from "../../helpers/Helper";
import { getTimeline, getProfile } from "../../helpers/Api"
import "./profile.scss"

export default function Profile() {
    const [user, setUser] = useState({});
    const [posts, setPosts] = useState([]);
    const { username } = useParams();

    useEffect(() => {
        get(username ?
            getProfile(username) :
            getTimeline('624c2c9287d8ad52f56938c8'))
        .then(res => {
            if (res && res.data) {
                setPosts(res.data.posts);
                setUser(res.data.user);
            }
        })
    }, [username])
    return (
        <FeedHoc>
            <div className="profileContainer">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src={user.coverPicture ? mUrl(user.coverPicture) : mUrl('person/noCover.png')} alt="" className="profileCoverImg" />
                            <img src={user.profilePicture ? mUrl(user.profilePicture) : mUrl('person/noAvatar.png')} alt="" className="profileUserImg sm-profile-image-150" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="sm-font-size-24">{user.firstName} {user.lastName}</h4>
                            <span className="profileInfoDesc">{user.bio}</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed posts={posts} />
                        <Rightbar user={user} />
                    </div>
                </div>
            </div>
        </FeedHoc>
    )
}
