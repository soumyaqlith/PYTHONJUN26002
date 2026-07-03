import React, { useContext } from 'react'
import { nameContext } from './App'

function Home() {
    const name=useContext(nameContext);
  return (
    <div>Home
        <br />
        name :{name}
    </div>
  )
}

export default Home