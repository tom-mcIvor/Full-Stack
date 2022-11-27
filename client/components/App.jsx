import React from 'react'

import Advice from './Advice-giver'
import Fruits from './Fruits'
import FruitEditor from './FruitEditor'
import Files from './Files'

function App() {

  return (
    <>
      <div className="app">
        <h1>Fullstack Boilerplate - with Fruits!</h1>
        <Fruits />
        <FruitEditor />
        <Advice />
        <Files />
      </div>
    </>
  )
}

export default App
