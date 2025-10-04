import React, { createContext, useState } from 'react'

export const votingContext = createContext();
function Voting({children}) {
    const[votinglines,setVotinglines] = useState(false);
  return (
    <div>
      <votingContext.Provider value={{votinglines,setVotinglines}}>
            {children}
      </votingContext.Provider>
    </div>
  )
}

export default Voting
