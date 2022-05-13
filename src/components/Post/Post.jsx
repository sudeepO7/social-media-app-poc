import "./post.scss"
import { useState } from "react";
import { MoreVert } from "@material-ui/icons"
import { Users } from '../../dummyData'

export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const userDetails = Users.filter(u => u.id === post.userId)[0];

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  }

  return (
    <div className="post">
      <div className="sm-padding-10">
        <div className="postTop">
          <div className="postTopLeft">
            <img src={userDetails?.profilePicture} alt="" className="sm-profile-image-32" />
            <span className="postUsername">{userDetails?.username}</span>
            <span className="sm-font-size-12">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="/assets/like.png" onClick={likeHandler} alt="" />
            <img className="likeIcon" src="/assets/heart.png" onClick={likeHandler} alt="" />
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
