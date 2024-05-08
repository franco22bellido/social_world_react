import { useEffect, useState } from 'react'
import { createLike, deleteLike, getLike } from '../../API/likes.api'

const ButtonLike = ({postId, incrementLikesCount, decrementLikesCount}) => {
    const [like, setLike] = useState()
    
    const handleLike = async () => {
        if(!like){
            await createLike(postId)
            incrementLikesCount()
        }else{
            await deleteLike(postId)
            decrementLikesCount()
        }
        
        return setLike(!like)   
    }
    const getData = async ()=> {
        const data = await getLike(parseInt(postId))
        setLike(data.state)
    }
    useEffect(()=> {
        getData()
    }, [])
    return (
         <button onClick={handleLike} className='btn-blue' >{like ? 'dislike' : 'like'}</button>
    )
}

export default ButtonLike
