import { useEffect, useState, useContext } from "react"
import { AuthContext } from '../../context/AuthContext'
import FeedHoc from "../../HOC/FeedHoc/FeedHoc"
import Sidebar from "../../components/Sidebar/Sidebar"
import Feed from "../../components/Feed/Feed"
import Rightbar from "../../components/Rightbar/Rightbar"
import { get } from "../../helpers/Http"
import { getTimeline } from "../../helpers/Api"

import "./home.scss"

export default function Home() {
    const { user } = useContext(AuthContext);
    const [posts, setPosts] = useState([]);

    const getPosts = () => {
        get(getTimeline(user._id))
        .then(res => {
            if (res && res.data) {
                setPosts(res.data.posts);
            }
        })
    }

    useEffect(() => {
        if (user)
            getPosts()
    }, [user?._id])
    return (
        <FeedHoc>
            <div className="homeContainer">
                <Sidebar />
                <Feed posts={posts} onPostUpload={getPosts} />
                <Rightbar />
            </div>
        </FeedHoc>
    )
}