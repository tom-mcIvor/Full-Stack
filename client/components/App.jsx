import React from 'react'

import Advice from './Advice-giver'
import Fruits from './Fruits'
import FruitEditor from './FruitEditor'
import Files from './Files'

function App() {
  const fruitCreated = (fruit) => {
    console.log(101, fruit);
  }

  return (
    <>
      <div className="app">
        <h1>Fullstack Boilerplate - with Fruits!</h1>
        <Fruits />
        <hr />
        <FruitEditor fruitCreated={fruitCreated} />
        <hr />
        <Advice />
        <hr />
        <Files />
      </div>
    </>
  )
}

export default App
