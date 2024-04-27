import Post from "./Post"

const PostsList = ({posts = []}) => {
  return (
    <>
      {
        posts && posts.map((post, i)=> (<Post post={post} username={post?.username} key={i}/>))
      }
    </>
  )
}

export default PostsList
