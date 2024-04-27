import {Link} from 'react-router-dom'
const UserResults = ({results=[]}) => {

  return (
    <div>
    {
        results &&
        <div>
          <h5>users found</h5>
          {
            results.map((user) => (<div key={user.id}>
              <p>username: </p>
              <Link to={`/${user.username}`}>{user.username}</Link>  
              <p>email: {user.email}</p>
              </div>))
          }
        </div>
      }
      
    </div>
  )
}

export default UserResults