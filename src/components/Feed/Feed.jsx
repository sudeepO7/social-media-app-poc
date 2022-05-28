import Share from "../Share/Share"
import Post from "../Post/Post"
import "./feed.scss"

// import { Posts } from '../../dummyData'

export default function Feed({ posts }) {
    return (
        <div className="feed">
            <div className="feedWrapper sm-padding-20">
                <Share />
                {
                    posts.map(p => (
                        <Post post={p} key={p._id} />
                    ))
                }
            </div>
        </div>
    )
}