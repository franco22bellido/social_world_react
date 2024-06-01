const ErrorsList = ({errors=[]}) => {
  return (
    <>
        {
            errors.map((error, i)=> (
                <p className="m-0 mb-1 font-semibold text-[#ff0000]" key={i}>{error}</p>
            ))
        }
    </>
  )
}

export default ErrorsList
