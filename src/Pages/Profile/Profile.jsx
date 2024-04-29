import PostsList from "../../components/posts/PostsList"
import { useParams } from "react-router-dom"
import {useAuth} from '../../contexts/AuthContext'
import {Link} from 'react-router-dom'
import { followUser, deleteFollowing} from "../../API/followers.api"
import useProfile from "./UseProfile"

const Profile = () => {
  const {username} = useParams()
  const {user} = useAuth()
  const {profile, setProfile} = useProfile(username)


  const followOne = async (followingId)=> {
    if(profile.followState){
      await deleteFollowing(followingId)
      return setProfile({...profile, followState: !profile.followState})
    }
    await followUser(followingId)
    return setProfile({...profile, followState: !profile.followState})
  }
  
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
              username !== user.user.username &&
              <button onClick={()=>followOne(profile.id)}>{profile.followState ? 'unfollow' : 'follow'}</button>
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