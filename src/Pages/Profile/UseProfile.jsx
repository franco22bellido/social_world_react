import { useEffect, useState } from "react"
import { getUserProfile } from "../../API/profile.api"
import { getFollowingById } from "../../API/followers.api"
import { useAuth } from "../../contexts/AuthContext"

const useProfile = (username) => {

    const [profile, setProfile] = useState(false)
    const {user} = useAuth()

    const getProfile = async () => {
        const { data } = await getUserProfile(username)
        if (username !== user.username) {
            const { state } = await getFollowingById(data.id)
            return setProfile({ ...data, followState: state })
        }
        return setProfile(data)
    }
    useEffect(() => {
        getProfile()
    }, [username])

    return {
        profile, setProfile
    }
}
export default useProfile