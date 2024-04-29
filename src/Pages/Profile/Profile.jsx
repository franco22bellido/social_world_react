import PostsList from "../../components/posts/PostsList"
import { useParams } from "react-router-dom"
import {useAuth} from '../../contexts/AuthContext'
import {Link} from 'react-router-dom'
import useProfile from "./UseProfile"
import FollowButton from "./follow/FollowButton"
import UseFollow from "./follow/UseFollow"

const Profile = () => {
  const {username} = useParams()
  const {user} = useAuth()
  const {profile, setProfile} = useProfile(username)
  const {handleFollowOne} = UseFollow(profile, setProfile)


  return (
    <section>
      {
        profile &&
        (
          <>
          <div>
            <h1>{profile.username}</h1>
            <h4>{profile.profile.firstname} {profile.profile.lastname}</h4>
            <Link>followers: {profile.profile.followersCount}</Link> <br />
            <Link>followings: {profile.profile.followingCount}</Link>

            {
              username !== user.username &&
              <FollowButton handleFollowOne={handleFollowOne} followState={profile.followState}/>
            }

            <h4>created At : {profile.profile.createdAt}</h4>
          </div>

          <h3>posts: </h3>
          <PostsList posts={profile.posts}/>
          </>
        )
      }
    </section>
  )
}

export default Profile