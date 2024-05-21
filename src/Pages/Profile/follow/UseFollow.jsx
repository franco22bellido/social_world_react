import { deleteFollowing, followUser } from "../../../API/followers.api"

const UseFollow = (profile, setProfile) => {

    const handleFollowOne = async ()=> {
        if(profile.followState){
          await deleteFollowing(profile.id)
          profile.followState = !profile.followState;
          profile.profile.followersCount = profile.profile.followersCount - 1;
          return setProfile({...profile})
        }
        await followUser(profile.id)
        profile.followState = !profile.followState;
        profile.profile.followersCount = profile.profile.followersCount + 1;
        return setProfile({...profile})
      }
      
    return {
      handleFollowOne
    }
}

export default UseFollow
