import { deleteFollowing, followUser } from "../../../API/followers.api"

const UseFollow = (profile, setProfile) => {

    const handleFollowOne = async ()=> {
        if(profile.followState){
          await deleteFollowing(profile.id)
          return setProfile({...profile, followState: !profile.followState})
        }
        await followUser(profile.id)
        return setProfile({...profile, followState: !profile.followState})
      }
      
    return {
      handleFollowOne
    }
}

export default UseFollow
