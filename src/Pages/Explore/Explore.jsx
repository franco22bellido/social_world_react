import { useState } from "react"
import BrowserForm from "../../components/Explore/BrowserForm"
import UserResults from "../../components/Explore/UserResults"
const Explore = () => {

  const [results, setResults] = useState()

  const handlerResults = (data)=> {
    setResults(data)
  }

  return (
    <div>
        <BrowserForm handlerResults={handlerResults}/>
        <UserResults results={results}/>
    </div>
  )
}

export default Explore
