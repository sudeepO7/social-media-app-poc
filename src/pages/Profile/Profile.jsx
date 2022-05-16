import FeedHoc from "../../HOC/FeedHoc/FeedHoc"
import Sidebar from "../../components/Sidebar/Sidebar"
import Feed from "../../components/Feed/Feed"
import Rightbar from "../../components/Rightbar/Rightbar"
import "./profile.scss"

export default function Profile() {
  return (
    <FeedHoc>
        <div className="profileContainer">
            <Sidebar />
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <img src="/assets/post/3.jpeg" alt="" className="profileCoverImg" />
                        <img src="/assets/person/7.jpeg" alt="" className="profileUserImg sm-profile-image-150" />
                    </div>
                    <div className="profileInfo">
                        <h4 className="sm-font-size-24">Sudeep Mukherjee</h4>
                        <span className="profileInfoDesc">Love to travel. Food lover. Coding enthusiast.</span>
                    </div>
                </div>
                <div className="profileRightBottom">
                    <Feed />
                    <Rightbar profile />
                </div>
            </div>
        </div>
    </FeedHoc>
  )
}
