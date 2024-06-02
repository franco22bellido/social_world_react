import { Link, useParams } from "react-router-dom"
import FollowersList from "../../components/Followers/FollowersList"
import useFollowings from './hooks/useFollowings'
import GoBackButton from "../../components/GoBackButton"
import Loader from "../../components/Loader"

const FollowingsPage = () => {
    const {username} = useParams()
    const { followings, loading } = useFollowings(username)
    return (
        <section className="w-[95%] flex flex-col gap-4 flex-wrap md:w-3/5 mx-auto mt-4">
            <GoBackButton to={`/${username}`}/>
            <FollowersList followers={followings}/>
            <Loader loading={loading}/>
            <Link className="w-full text-center rounded bg-blue-600 hover:opacity-85" to={`/${username}/followers`}>view followers</Link>
        </section>
    )
}

export default FollowingsPage