import { useEffect, useState } from "react"
import FeedHoc from "../../HOC/FeedHoc/FeedHoc"
import Sidebar from "../../components/Sidebar/Sidebar"
import Feed from "../../components/Feed/Feed"
import Rightbar from "../../components/Rightbar/Rightbar"
import { get } from "../../helpers/Http"
import { getTimeline } from "../../helpers/Api"

import "./home.scss"

export default function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        get(getTimeline('624c2c9287d8ad52f56938c8'))
        .then(res => {
            if (res && res.data) {
                setPosts(res.data.posts);
            }
        })
    }, [])
    return (
        <FeedHoc>
            <div className="homeContainer">
                <Sidebar />
                <Feed posts={posts} />
                <Rightbar />
            </div>
        </FeedHoc>
    )
}