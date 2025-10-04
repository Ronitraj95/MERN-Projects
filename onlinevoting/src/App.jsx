import React from 'react'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import About from './Pages/About'
import Vote from './Pages/Vote'
import Results from './Pages/Results'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import Nominees from './Pages/Nominees'
import CastVotes from './Pages/CastVotes'
import Voting from './Pages/Voting'
import Resultcandidate from './Pages/Resultcandidate'


function App() {
  return (
    <div>
      <Voting>
        <Resultcandidate>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/votinglines' element={<Vote/>}></Route>
          <Route path='/results' element={<Results/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/nominees' element={<Nominees/>}></Route>
          <Route path='/castvote' element={<CastVotes/>}></Route>
        </Routes>
      </BrowserRouter>
      </Resultcandidate>
      </Voting>
        
      
    </div>
  )
}

export default App
