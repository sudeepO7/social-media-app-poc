import { useParams } from "react-router-dom"
import { useEffect, useState, useContext } from "react"
import { AuthContext } from '../../context/AuthContext'
import FeedHoc from "../../HOC/FeedHoc/FeedHoc"
import Sidebar from "../../components/Sidebar/Sidebar"
import Feed from "../../components/Feed/Feed"
import Rightbar from "../../components/Rightbar/Rightbar"
import { get } from "../../helpers/Http"
import { mUrl } from "../../helpers/Helper";
import { getProfile } from "../../helpers/Api"
import "./profile.scss"

export default function Profile() {
    const { user } = useContext(AuthContext);
    const [userData, setUserData] = useState({});
    const [posts, setPosts] = useState([]);
    const { username } = useParams();

    const getPosts = () => {
        get(getProfile(username ? username : user.username))
        .then(res => {
            if (res && res.data) {
                setPosts(res.data.posts);
                setUserData(res.data.user);
            }
        })
    }

    useEffect(() => {
        getPosts();
    }, [username, user?.username])
    return (
        <FeedHoc>
            <div className="profileContainer">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src={userData.coverPicture ? mUrl(userData.coverPicture) : mUrl('person/noCover.png')} alt="" className="profileCoverImg" />
                            <img src={userData.profilePicture ? mUrl(userData.profilePicture) : mUrl('person/noAvatar.png')} alt="" className="profileUserImg sm-profile-image-150" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="sm-font-size-24">{userData.firstName} {userData.lastName}</h4>
                            <span className="profileInfoDesc">{userData.bio}</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed posts={posts} onPostUpload={getPosts} />
                        <Rightbar user={userData} />
                    </div>
                </div>
            </div>
        </FeedHoc>
    )
}
