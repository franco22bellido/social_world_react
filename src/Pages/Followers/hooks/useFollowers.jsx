import { useEffect, useState } from "react"
import { getFollowers } from "../../../API/followers.api"

const useFollowers = (username) => {
    const [followers, setFollowers] = useState()
    const getData = async () => {
        const followersFound = await getFollowers()
        setFollowers(followersFound)
    }

    useEffect(()=> {
        getData()
    }, [])
    return {
        getData,
        followers,
        setFollowers
    }
}

export default useFollowers