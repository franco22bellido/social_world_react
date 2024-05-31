import { Link, useParams } from "react-router-dom"
import FollowersList from "../../components/Followers/FollowersList"
import useFollowers from "./hooks/useFollowers"

const FollowersPage = () => {
  const {username} = useParams()
  const {followers} = useFollowers(username)

  return (
    <div>
      <Link to={`/${username}`}>go back</Link>
      <FollowersList followers={followers}/>  
      <Link to={`/${username}/following`}>view followigs</Link>
    </div>
  )
}

export default FollowersPage