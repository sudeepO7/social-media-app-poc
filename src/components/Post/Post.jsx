import { useState } from "react"
import { MoreVert } from "@material-ui/icons"
import { mUrl } from "../../helpers/Helper"
import { format } from "timeago.js"
import { Link } from "react-router-dom"
import "./post.scss"

export default function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  }

  return (
    <div className="post">
      <div className="sm-padding-10">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`profile/${post.userId}`}>
              <img src={post?.profilePicture ? mUrl(post?.profilePicture) : mUrl('person/noAvatar.png')} alt="" className="sm-profile-image-32" />
            </Link>
            <span className="postUsername">{post?.firstName + ' ' + post?.lastName}</span>
            <span className="sm-font-size-12">{format(post.createdAt)}</span>
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
