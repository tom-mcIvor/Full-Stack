import React from 'react'

import Advice from './Advice-giver'
import Fruits from './Fruits'
import FruitEditor from './FruitEditor'

function App() {

  return (
    <>
      <div className="app">
        <h1>Fullstack Boilerplate - with Fruits!</h1>
        <Fruits />
        <FruitEditor />
        <Advice />
      </div>
    </>
  )
}

export default App
