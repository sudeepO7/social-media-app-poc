import { useEffect, useContext, useState } from "react"
import Online from "../Online/Online"
import { getRelationshipStatus } from "../../helpers/Helper"
import { AuthContext } from '../../context/AuthContext'
import { dpUrl } from "../../helpers/Helper"
import { getFriends } from "../../helpers/Api"
import { follow, unfollow } from "../../helpers/apiCalls"
import { get, } from "../../helpers/Http"
import { Link } from "react-router-dom"
import { Add, Remove } from "@material-ui/icons"
import "./rightbar.scss"

export default function Rightbar({ user }) {
    const [friendsList, setFriendsList] = useState([]);
    const { user: currentUser, dispatch } = useContext(AuthContext);
    const followed = currentUser?.following?.includes(user?._id);

    useEffect(() => {
        const userId = user ? user._id : currentUser?._id;
        if (userId)
            get(getFriends(userId))
            .then(res => {
                if (res && res.data?.friends)
                    setFriendsList(res.data?.friends);
            });
    }, [user?._id, currentUser?._id])

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
                        friendsList.map(u => (
                            <Online key={u._id} user={u} />
                        ))
                    }
                </ul>
            </>
        )
    }

    const handleFollowClick = () => {
        if (followed)
            unfollow(user._id, currentUser?._id, dispatch);
        else
            follow(user._id, currentUser?._id, dispatch);
    }

    const FollowButton = () => {
        return (
            <button className="rightbarFollowButton" onClick={handleFollowClick}>
                { followed ? (<>Unfollow <Remove /> </>) : (<>Follow <Add /> </>)}
            </button>
        );
    }

    const ProfileRightBar = () => {
        return (
            <>
                {
                    currentUser?._id !== user?._id && (
                        <FollowButton />
                    )
                }
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
                    {
                        friendsList.map(u => (
                            <div className="rightbarFollowing" key={u._id}>
                                <Link to={`/profile/${u.username}`} style={{textDecoration: "none"}}>
                                    <img src={dpUrl(u.profilePicture)} alt="" className="rightbarFollowingImg" />
                                    <span className="rightbarFollowingName">{u.username}</span>
                                </Link>
                            </div>
                        ))
                    }
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