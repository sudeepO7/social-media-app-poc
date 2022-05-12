import Share from "../Share/Share"
import Post from "../Post/Post"
import "./feed.scss"
import { Posts } from '../../dummyData'

export default function Feed() {
    return (
        <div className="feed">
            <div className="feedWrapper sm-padding-20">
                <Share />
                {
                    Posts.map(p => (
                        <Post post={p} key={p.id} />
                    ))
                }
            </div>
        </div>
    )
}