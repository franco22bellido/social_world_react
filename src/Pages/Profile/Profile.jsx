import PostsList from "../../components/posts/PostsList"
import { useParams } from "react-router-dom"
import {useAuth} from '../../contexts/AuthContext'
import useProfile from "./UseProfile"
import FollowButton from "./follow/FollowButton"
import UseFollow from "./follow/UseFollow"
import ProfileComponent from "./ProfileComponent"

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
            <ProfileComponent profile={profile}/>

            {
              username !== user.username &&
              <FollowButton handleFollowOne={handleFollowOne} followState={profile.followState}/>
            }

          <h3>posts: </h3>
          <PostsList posts={profile.posts}/>
          </>
        )
      }
    </section>
  )
}

export default Profile