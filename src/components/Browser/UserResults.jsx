import {Link} from 'react-router-dom'
const UserResults = ({results=[]}) => {

  return (
    <>
    {
        results &&
        <>
          {
            results.map((user) => (
            <div className='card' key={user.id}>
                <p>username: </p>
                <Link to={`/profile/?username=${user.username}`}>{user.username}</Link>  
                <p>email: {user.email}</p>
            </div>))
          }
        </>
      }
      
      </>
  )
}

export default UserResults