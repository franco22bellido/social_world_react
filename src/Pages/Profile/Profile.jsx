import { useEffect, useState } from "react"
import { getUserProfile } from "../../API/profile.api"
import PostsList from "../../components/posts/PostsList"
import { useParams } from "react-router-dom"
import {useAuth} from '../../contexts/AuthContext'

const Profile = () => {
  const {username} = useParams()
  const {user} = useAuth()
  const [data, setData] = useState(false)

  const getProfile = async ()=> {
    const {data} = await getUserProfile(user.token, username)
    setData(data)
  }
  useEffect(()=> {
    getProfile()
  }, [])

  return (
    <section>
      {
        data &&
        (
          <>
          <div>
            <h1>{data.username}</h1>
            <h4>{data.profile.firstname} {data.profile.lastname}</h4>
            <h4>followers {data.profile.followersCount}</h4>
            <button>see followers</button>
            <h4>following {data.profile.followingCount}</h4>
            <button>see following</button>
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