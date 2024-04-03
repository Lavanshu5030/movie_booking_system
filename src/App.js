import React, { Component } from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Home'
import SingleMovie from './SingleMovie'
import Error from './Error'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path ='/' element= {<Home/>}></Route>
          <Route path='movie/:id' element= {<SingleMovie/>}></Route>
          <Route path='*' element = {<Error/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

