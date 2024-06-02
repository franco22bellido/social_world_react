import { Link } from "react-router-dom"

const FollowersList = ({followers=[]}) => {
  return (
    <div>
    {
        followers &&
        followers.map((follower)=> (
            <article className="flex flex-row items-center justify-between border-black" key={follower.id}>
                <Link className="hover:opacity-80" to={`/${follower.username}`}>{follower.username}</Link>
                <p>{follower.email}</p>
                <button className="border border-gray-800 rounded px-4 py-1 hover:opacity-80">Delete</button>
            </article>
        ))
    }
  </div>
  )
}

export default FollowersList
