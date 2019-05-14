import React, { useState } from 'react'

const App = () => {

  const [ ressource, setResource ] = useState('posts')

    return (
      <div>
        <div>
          <button onClick={ () => setResource('posts') }>Posts</button>
          <button onClick={ () => setResource('todos') }>ToDos</button>
        </div>
        {ressource}
      </div>
    )
}
export default App
