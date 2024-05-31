import { Link } from "react-router-dom"
import FollowersList from "../../components/Followers/FollowersList"
import useFollowers from "./hooks/useFollowers"

const FollowersPage = () => {
  const {followers} = useFollowers()
  return (
    <div>
      <FollowersList followers={followers}/>  
      <Link to={'/following'}>view followigs</Link>
    </div>
  )
}

export default FollowersPage