const FollowButton = ({handleFollowOne=()=>{}, followState}) => {

  return (
    <>
        {
            <button onClick={()=>handleFollowOne()}>{followState ? 'unfollow' : 'follow'}</button>
        }
    </>
  )
}

export default FollowButton
