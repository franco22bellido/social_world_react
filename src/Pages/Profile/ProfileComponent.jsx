import { Link } from 'react-router-dom'
import FollowButton from './follow/FollowButton'
import UseFollow from './follow/UseFollow'
const ProfileComponent = ({ profile = {}, setProfile }) => {
  const { handleFollowOne } = UseFollow(profile, setProfile)

  return (
    <>
      <h1 className='user-title'>{profile.username}</h1>
      <h3>{profile.profile.firstname} {profile.profile.lastname}</h3>
      <ul className='p-m-0 container-flex-row'>
        <li className='li-inline'>
          <Link className='link' to={`/${profile.username}/followers/`}>followers: {profile.profile.followersCount}</Link>
        </li>
        <li className='li-inline'>
          <Link className='link' to={`/${profile.username}/following/`}>following: {profile.profile.followingCount}</Link>
        </li>
        {
          profile.hasOwnProperty("followState") &&
          (
            <li className='li-inline'>
              <FollowButton className='btn-blue' followState={profile.followState} handleFollowOne={handleFollowOne} />
            </li>
          )
        }
      </ul>
      <p className='text-center p-break-word'>{profile.profile.info ? profile.profile.info : 'not info'}</p>
    </>

  )
}

export default ProfileComponent