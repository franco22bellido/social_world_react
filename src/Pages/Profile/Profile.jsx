import PostsList from "../../components/posts/PostsList"
import Loader from "../../components/Loader"
import { useParams} from "react-router-dom"
import useProfile from "./UseProfile"
import ProfileComponent from "./ProfileComponent"

const Profile = () => {
  const {username} = useParams()
  const {profile, setProfile, posts, setPosts, loading} = useProfile(username)


  return (
    <section>
      <Loader loading={loading} className={'h-[400px]'}/> 
      {
        profile &&
        (
          <section className="container-flex">
            <ProfileComponent profile={profile} setProfile={setProfile}/>
            <PostsList posts={posts} setPosts={setPosts} />
          </section>
        )
      }
    </section>
  )
}

export default Profile