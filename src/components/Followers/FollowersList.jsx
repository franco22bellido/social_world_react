const FollowersList = ({followers=[]}) => {
  return (
    <>
    {
        followers &&
        followers.map((follower)=> (
            <div key={follower.id}>
                <p>{follower.username}</p>
                <p>{follower.email}</p>
            </div>
        ))
    }
</>
  )
}

export default FollowersList
