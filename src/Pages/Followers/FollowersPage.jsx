import { Link, useParams } from "react-router-dom"
import FollowersList from "../../components/Followers/FollowersList"
import useFollowers from "./hooks/useFollowers"
import GoBackButton from "../../components/GoBackButton"
import Loader from '../../components/Loader'
const FollowersPage = () => {
  const {username} = useParams()
  const {followers, loading} = useFollowers(username)

  return (
    <section className="w-[95%] flex flex-col gap-4 flex-wrap md:w-3/5 mx-auto mt-4">
      <GoBackButton to={`/${username}`}/>
      <FollowersList followers={followers}/>  
      <Loader loading={loading}/>
      <Link className="w-full text-center rounded bg-blue-600 hover:opacity-85" to={`/${username}/following`}>view following</Link>
    </section>
  )
}

export default FollowersPage