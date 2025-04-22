import React from 'react'
import Mainpage from './Component/Mainpage'
import {Route , Routes} from 'react-router-dom'
import Mealinfo from './Component/Mealinfo'

const App = () => {
  return (
    <div>
      {/* <Mainpage/> */}
      <Routes>
      <Route path='/' element={<Mainpage/>}/>
      <Route path='/:mealid' element={<Mealinfo/>}/>
      
      </Routes>
    </div>
  )
}

export default App
