const Follower = ({followers=[]}) => {

  return (
    <>
        {
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

export default Follower
