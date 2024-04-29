import {Link} from 'react-router-dom'
const ProfileComponent = ({profile={}})=> {

    return (
      <div>
        <h1>{profile.username}</h1>
        <h4>{profile.profile.firstname} {profile.profile.lastname}</h4>
        <Link>followers: {profile.profile.followersCount}</Link> <br />
        <Link>followings: {profile.profile.followingCount}</Link>
  
        <h4>created At : {profile.profile.createdAt}</h4>
      </div>
  
    )
  }
  
  export default ProfileComponent