import { Link } from "react-router-dom"
import FollowersList from "../../components/Followers/FollowersList"
import useFollowings from './hooks/useFollowings'

const FollowingsPage = () => {
    const { followings } = useFollowings()
    return (
        <div>
            <FollowersList followers={followings} />
            <Link to={'/followers'}>view followers</Link>
        </div>
    )
}

export default FollowingsPage