import "./share.scss"

import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";
import { mUrl } from "../../helpers/Helper"

export default function Share() {
  return (
    <div className="share">
        <div className="shareWrapper sm-padding-10">
            <div className="shareTop">
                <img src={mUrl('person/1.jpeg')} alt="" className="sm-profile-image-50 shareProfileImg" />
                <input placeholder="What's in your mind" className="shareInput" />
            </div>
            <hr className="sm-margin-20" />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMedia htmlColor="tomato" className="shareIcon" />
                        <span className="shareOptionText">Photo or video</span>
                    </div>
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
                <div className="shareButton">Share</div>
            </div>
        </div>
    </div>
  )
}
