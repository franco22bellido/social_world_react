import { Link, useParams } from "react-router-dom"
import FollowersList from "../../components/Followers/FollowersList"
import useFollowings from './hooks/useFollowings'

const FollowingsPage = () => {
    const {username} = useParams()
    const { followings } = useFollowings(username)
    return (
        <div>
            <Link to={`/${username}`}>go back</Link>
            <FollowersList followers={followings} />
            <Link to={`/${username}/followers`}>view followers</Link>
        </div>
    )
}

export default FollowingsPage