import React, { useState, useEffect } from 'react'
import { getFile, updateFile } from '../services/files-api'



export default function Files() {
  const [file, setFile] = useState(null)
  const [name, setName] = useState(null)

  // Hydrate React State
  useEffect(() => {
    const setup = async () => {
      refreshFile()
    }

    setup()
  }, [])

  const updateName = () => {
    updateFile(name)
    refreshFile()
  }

  const refreshFile = () => {
    getFile()
      .then(f => {
        setFile(f)
        setName(f.name)
        console.log(f, f.name)
      })
      .catch(console.error)
  }

  return (

    <>
      <hr></hr>
      <div>
        {JSON.stringify(file)}
      </div>
      {
        name ?
          <div>
            Name: <input value={name} onChange={e => setName(e.target.value)}></input>
            <button onClick={() => updateName()}>Save</button>
          </div> : <p>Loading...</p>
      }
    </>
  )

}


