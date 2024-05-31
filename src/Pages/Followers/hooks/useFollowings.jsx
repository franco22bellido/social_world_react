import { useEffect, useState } from "react"
import { getFollowings } from "../../../API/followers.api"

const useFollowings = (username) => {
    const [ followings, setFollowings] = useState([])
    const getData = async () => {
        const followingsFound = await getFollowings(username)
        setFollowings(followingsFound)
    }

    useEffect(()=> {
        getData()
    }, [])
    return {
        getData,
        followings,
        setFollowings
    }
}

export default useFollowings