const FollowButton = ({handleFollowOne=()=>{}, followState}) => {

  return (
    <>
        {
            <button className="btn-blue" onClick={()=>handleFollowOne()}>{followState ? 'unfollow' : 'follow'}</button>
        }
    </>
  )
}

export default FollowButton
