import "./rightbar.scss";
import Online from "../Online/Online"
import { Users } from "../../dummyData"

export default function Rightbar() {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
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
            </div>
        </div>
    )
}