import React, { useState } from 'react';
import AppBody from './components/AppBody'
import { state } from './components/data/itemsData'

function App() {

    const [data, ] = useState(state)
   
  return (
    <div className="App">
      
      <AppBody data={data}/>

    </div>
  )
}

export default App
