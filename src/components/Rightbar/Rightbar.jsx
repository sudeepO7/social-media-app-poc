import "./rightbar.scss";
import Online from "../Online/Online"
import { getRelationshipStatus } from "../../helpers/Helper"
import { Users } from "../../dummyData"

export default function Rightbar({ user }) {

    const HomeRightBar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img src="/assets/gift.png" alt="" className="birthdayImg" />
                    <span className="birthdayText"><b>Pola Foster</b> and <b>3 other friends</b> have birthday today</span>
                </div>
                <img src="/assets/ad.png" alt="" className="rightbarAd" />
                <h4 className="sm-bottom-margin-20">Online Friends</h4>
                <ul className="sm-list-style">
                    {
                        Users.map(u => (
                            <Online key={u.id} user={u} />
                        ))
                    }
                </ul>
            </>
        )
    }

    const ProfileRightBar = () => {
        return (
            <>
                <h4 className="rightbarTitle">User information</h4>
                <div className="rightbarInfo sm-bottom-margin-30">
                    <div className="rightbarInfoItem sm-bottom-margin-10">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">{user.city}</span>
                    </div>
                    <div className="rightbarInfoItem sm-bottom-margin-10">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">{user.state}</span>
                    </div>
                    <div className="rightbarInfoItem sm-bottom-margin-10">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">{getRelationshipStatus(user.relationship)}</span>
                    </div>
                </div>
                <h4 className="rightbarTitle">User friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img src="/assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Bruce Willis</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Jim Carrey</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/assets/person/7.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Mat Damon</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Tom Cruise</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/assets/person/6.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Nicolas Cage</span>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {
                    user ? <ProfileRightBar /> : <HomeRightBar />
                }
            </div>
        </div>
    )
}