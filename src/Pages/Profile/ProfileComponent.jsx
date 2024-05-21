import {Link} from 'react-router-dom'
import FollowButton from './follow/FollowButton'
import UseFollow from './follow/UseFollow'
const ProfileComponent = ({profile={}, setProfile})=> {
    const {handleFollowOne} = UseFollow(profile, setProfile)

    return (
      <>
        <h1 className='user-title'>{profile.username}</h1>
        <h3>{profile.profile.firstname} {profile.profile.lastname}</h3>
        <ul className='p-m-0 container-flex-row'>
          <li className='li-inline'>
            <a className='link'>followers: {profile.profile.followersCount}</a>
          </li>
          <li className='li-inline'>
            <a className='link'>followings: {profile.profile.followingCount}</a>
          </li>
          {
            profile.hasOwnProperty("followState") &&
            (
              <li className='li-inline'>
                <FollowButton className='btn-blue' followState={profile.followState} handleFollowOne={handleFollowOne}/>
              </li>
            )
          }
            
        </ul>
        <p className='text-center p-break-word'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, tenetur nam. Ab explicabo </p>
        </>
  
    )
  }
  
  export default ProfileComponent