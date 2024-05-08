import { useState } from "react"
import BrowserForm from "../../components/Browser/BrowserForm"
import UserResults from "../../components/Browser/UserResults"
const Browser = () => {

  const [results, setResults] = useState()

  const handlerResults = (data)=> {
    setResults(data)
  }

  return (
    <div className="container-flex">
        <BrowserForm handlerResults={handlerResults}/>
        <UserResults results={results}/>
    </div>
  )
}

export default Browser
