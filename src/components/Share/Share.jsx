import { useContext, useRef, useState } from "react"
import { AuthContext } from '../../context/AuthContext'
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";
import { mUrl } from "../../helpers/Helper"
import { createPost } from "../../helpers/Api"
import { post } from "../../helpers/Http"
import "./share.scss"

export default function Share() {
    const { user } = useContext(AuthContext);
    const [file, setFile] = useState(null);
    const desc = useRef();

    const handleShare = (e) => {
        e.preventDefault();
        if (desc.current.value || file) {
            post(createPost(), {}, {
                userId: user._id,
                desc: desc.current.value,
                img: file || null
            }).then(res => {
                if (res && res.data?.success) {
                    
                }
            })
        }
    }

    return (
        <div className="share">
            <div className="shareWrapper sm-padding-10">
                <div className="shareTop">
                    <img src={user.profilePicture ? mUrl(user.profilePicture) : mUrl('person/noAvatar.png')} alt="" className="sm-profile-image-50 shareProfileImg" />
                    <input placeholder="What's in your mind" ref={desc} className="shareInput" />
                </div>
                <hr className="sm-margin-20" />
                <form className="shareBottom" onSubmit={handleShare}>
                    <div className="shareOptions">
                        <label htmlFor="file" className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon" />
                            <span className="shareOptionText">Photo or video</span>
                            <input type="file" id="file" accept=".png,.jpeg,.jpg" 
                                   style={{display: 'none'}} onChange={(e) => setFile(e.target.files[0])} />
                        </label>
                        <div className="shareOption">
                            <Label htmlColor="blue" className="shareIcon" />
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor="green" className="shareIcon" />
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
                            <span className="shareOptionText">Feeling</span>
                        </div>
                    </div>
                    <div className="shareButton" type="submit">Share</div>
                </form>
            </div>
        </div>
    )
}
