import React, { useState } from 'react'
import RessourceList from './RessourceList'

const App = () => {

  const [ ressource, setResource ] = useState('posts')

    return (
      <div>
        <div>
          <button onClick={ () => setResource('posts') }>Posts</button>
          <button onClick={ () => setResource('todos') }>ToDos</button>
        </div>
        <RessourceList ressource={ressource} /> 
      </div>
    )
}
export default App
