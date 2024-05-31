import PostsList from "../../components/posts/PostsList"
import { useParams} from "react-router-dom"
import useProfile from "./UseProfile"
import ProfileComponent from "./ProfileComponent"

const Profile = () => {
  const {username} = useParams()
  const {profile, setProfile, posts, setPosts} = useProfile(username)


  return (
    <section>
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