import { useEffect, useState } from "react"
import Share from "../Share/Share"
import Post from "../Post/Post"
import { get } from "../../helpers/Http"
import { getTimeline } from "../../helpers/Api"
import "./feed.scss"

// import { Posts } from '../../dummyData'

export default function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        get(getTimeline('624c2c9287d8ad52f56938c8'))
        .then(res => {
            console.log('getTimeline | res => ', res);
            if (res && res.data) {
                setPosts(res.data.posts)
            }
        })
    }, [])

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