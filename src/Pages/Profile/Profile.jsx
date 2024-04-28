import { useEffect, useState } from "react"
import { getUserProfile } from "../../API/profile.api"
import PostsList from "../../components/posts/PostsList"
import { useParams } from "react-router-dom"
import {useAuth} from '../../contexts/AuthContext'
import {Link} from 'react-router-dom'
import { getFollowingsByFollowingId , followUser, deleteFollowing } from "../../API/followers.api"

const Profile = () => {
  const {username} = useParams()
  const {user} = useAuth()
  const [data, setData] = useState(false)
  

  const getProfile = async ()=> {
    const {data} = await getUserProfile(user.token, username)
    if(username !== user.user.username){
      const {state}= await getFollowingsByFollowingId(data.id)
      return setData({...data, state})
    }
    return setData(data)
  }
  const followOne = async (followingId)=> {
    if(data.state){
      await deleteFollowing(followingId)
      return setData({...data, state: !data.state})
    }
    await followUser(followingId)
    return setData({...data, state: !data.state})
  }
  useEffect(()=> {
    getProfile()
  }, [username])

  return (
    <section>
      {
        data &&
        (
          <>
          <div>
            <h1>{data.username}</h1>
            <h4>{data.profile.firstname} {data.profile.lastname}</h4>
            <Link>followers: {data.profile.followersCount}</Link> <br />
            <Link>followings: {data.profile.followingCount}</Link>

            {
              username !== user.user.username &&
              <button onClick={()=>followOne(data.id)}>{data.state ? 'unfollow' : 'follow'}</button>
            }

            <h4>created At : {data.profile.createdAt}</h4>
          </div>

          <h3>posts: </h3>
          <PostsList posts={data.posts}/>
          </>
        )
      }
    </section>
  )
}

export default Profile