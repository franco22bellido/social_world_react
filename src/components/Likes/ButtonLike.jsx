import { useEffect, useState } from 'react'
import { createLike, deleteLike, getLike } from '../../API/likes.api'

const ButtonLike = ({post= {}, setPost={}}) => {
    const [like, setLike] = useState()
    
    const handleLike = async () => {
        if(!like){
            await createLike(post.id)
            setPost({...post, likesCount: post.likesCount + 1})
        }else{
            await deleteLike(post.id)
            setPost({...post, likesCount: post.likesCount + -1})
        }
        
        return setLike(!like)
        
    }
    const getData = async ()=> {
        const data = await getLike(parseInt(post.id))
        setLike(data.state)
    }
    useEffect(()=> {
        getData()
    }, [])
    return (
        <button onClick={handleLike}>{like ? 'dislike' : 'like'}</button>
    )
}

export default ButtonLike
