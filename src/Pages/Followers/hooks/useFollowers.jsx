import { useEffect, useState } from "react"
import { getFollowers } from "../../../API/followers.api"

const useFollowers = (username) => {
    const [followers, setFollowers] = useState()
    const [loading, setLoading] = useState(true)
    const getData = async () => {
        setLoading(true)
        const followersFound = await getFollowers(username)
        setLoading(false)
        setFollowers(followersFound)
    }

    useEffect(()=> {
        getData()
    }, [])
    return {
        loading,
        getData,
        followers,
        setFollowers
    }
}

export default useFollowers