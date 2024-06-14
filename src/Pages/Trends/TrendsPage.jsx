import { useEffect, useState } from "react"
import { getTrends } from "../../API/posts.api"
import PostsList from '../../components/posts/PostsList'
import Loader from '../../components/Loader'
const TrendsPage = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    async function getData() {
        setLoading(true)
        const res = await getTrends()
        setLoading(false)
        setPosts(res.data)
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <>
        <section className="flex flex-col justify-center items-center">
            <h1>Most liked posts today</h1>
            <Loader loading={loading} />
            <PostsList posts={posts} setPosts={setPosts}/>
        </section>
        </>
    )
}

export default TrendsPage
