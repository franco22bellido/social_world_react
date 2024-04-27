const UserResults = ({results=[]}) => {
  return (
    <div>
    {
        results &&
        <div>
          <h5>users found</h5>
          {
            results.map((user) => (<div key={user.id}>
              username: {user.username} <br />
              email: {user.email}
              </div>))
          }
        </div>
      }
      
    </div>
  )
}

export default UserResults
