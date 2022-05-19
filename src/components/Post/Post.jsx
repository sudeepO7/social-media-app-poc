import { useEffect, useState } from "react"
import { MoreVert } from "@material-ui/icons"
import { mUrl } from "../../helpers/Helper"
import { get } from "../../helpers/Http"
import { getUser } from "../../helpers/Api"
import "./post.scss"

export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    get(getUser(post.userId))
    .then(res => {
        console.log('getUser | res => ', res);
        if (res && res.data) {
          setUser(res.data.user)
        }
    })
  }, [])

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  }

  return (
    <div className="post">
      <div className="sm-padding-10">
        <div className="postTop">
          <div className="postTopLeft">
            <img src={user?.profilePicture ? mUrl(user?.profilePicture) : mUrl('person/noAvatar.png')} alt="" className="sm-profile-image-32" />
            <span className="postUsername">{user?.firstName + ' ' + user?.lastName}</span>
            <span className="sm-font-size-12">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={mUrl(post.img)} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src={mUrl('like.png')} onClick={likeHandler} alt="" />
            <img className="likeIcon" src={mUrl('heart.png')} onClick={likeHandler} alt="" />
            <span className="sm-font-size-15">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentCounter">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
