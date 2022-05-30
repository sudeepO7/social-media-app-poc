import { useParams } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from '../../context/AuthContext'
import Share from "../Share/Share"
import Post from "../Post/Post"
import "./feed.scss"

// import { Posts } from '../../dummyData'

export default function Feed({ posts, onPostUpload }) {
    const { user } = useContext(AuthContext);
    const { username } = useParams();
    return (
        <div className="feed">
            <div className="feedWrapper sm-padding-20">
                {
                    (!username || user.username === username) ? <Share onPostUpload={onPostUpload} /> : null
                }
                {
                    posts.map(p => (
                        <Post post={p} key={p._id} />
                    ))
                }
            </div>
        </div>
    )
}