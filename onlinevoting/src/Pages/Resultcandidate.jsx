import React, { createContext, useState } from 'react'

export const rescontext = createContext()
function Resultcandidate({children}) {
    const[results,setResults] = useState(null)
  return (
    <div>
      <rescontext.Provider value={{results,setResults}}>
        {children}
      </rescontext.Provider>
    </div>
  )
}

export default Resultcandidate
