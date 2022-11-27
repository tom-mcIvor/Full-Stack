import React, { useState } from 'react'
import { getFile, updateFile } from '../services/files-api'



export default function Files() {
  const [file, setFile] = useState(null)
  const [name, setName] = useState(null)

  const updateName = () => {
    updateFile(name)
    refreshFile()
  }

  const refreshFile = () => {
    getFile().then(f => setFile(f)).catch(console.error)
    refreshName()
  }

  const refreshName = () => {
    setName(file.name)
  }

  return (

    <>
      <hr></hr>
      <div>
        {JSON.stringify(file)}
      </div>
      {
        file ?
          <div>
            Name: <input value={name} onChange={e => setName(e.target.value)}></input>
            <button onClick={() => updateName()}>Save</button>
          </div> : <p>Loading...</p>
      }
    </>
  )

}


