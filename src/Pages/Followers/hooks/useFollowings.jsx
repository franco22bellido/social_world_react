import { useEffect, useState } from "react"
import { getFollowings } from "../../../API/followers.api"

const useFollowings = (username) => {
    const [ followings, setFollowings] = useState([])
    const [loading, setLoading] = useState(true)
    const getData = async () => {
        setLoading(true)
        const followingsFound = await getFollowings(username)
        setLoading(false)
        setFollowings(followingsFound)
    }

    useEffect(()=> {
        getData()
    }, [])
    return {
        loading,
        getData,
        followings,
        setFollowings
    }
}

export default useFollowings