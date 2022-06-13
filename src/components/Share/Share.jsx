import { useContext, useRef, useState } from "react"
import { AuthContext } from '../../context/AuthContext'
import { PermMedia, Label, Room, EmojiEmotions, Cancel } from "@material-ui/icons";
import { dpUrl } from "../../helpers/Helper"
import { createPost, uploadFile } from "../../helpers/Api"
import { post } from "../../helpers/Http"
import Toast from "../../components/Toast/Toast"
import "./share.scss"

export default function Share({ onPostUpload }) {
    const { user } = useContext(AuthContext);
    const [ file, setFile ] = useState(null);
    const [ showToast, setShowToast ] = useState(false);
    const desc = useRef();
    const toastMessage = {
        message: `Post uploaded successfully`,
        handleClose: () => setShowToast(false),
        severity: 'success'
    };

    const UploadedImage = () => {
        return (
            <div className="uploadedImgContainer">
                <img src={URL.createObjectURL(file)} alt="" className="uploadedImg" />
                <Cancel className="uploadedImgCancel" onClick={() => setFile(null)} />
            </div>
        );
    }

    const handleShare = async (e) => {
        e.preventDefault();
        if (desc.current.value || file) {
            let filename;
            if (file) {
                const formData = new FormData();
                filename = `${Date.now()}_${user._id}_${file.name}`;
                formData.append('name', filename);
                formData.append('file', file);
                await post(uploadFile(), {}, formData);
            }
            post(createPost(), {}, {
                userId: user._id,
                desc: desc.current.value,
                img: file ? filename : null
            }).then(res => {
                if (res && res.data?.success) {
                    setShowToast(true);
                    desc.current.value = null;
                    setFile(null);
                    setTimeout(() => onPostUpload(), 2000);
                }
            })
        }
    }

    return (
        <div className="share">
            <div className="shareWrapper sm-padding-10">
                <div className="shareTop">
                    <img src={dpUrl(user.profilePicture)} alt="" className="sm-profile-image-50 shareProfileImg" />
                    <input placeholder="What's in your mind" ref={desc} className="shareInput" />
                </div>
                <hr className="sm-margin-20" />
                {
                    file && <UploadedImage />
                }
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
                    <button className="shareButton">Share</button>
                </form>
            </div>
            <Toast open={showToast} {...toastMessage} />
        </div>
    )
}
