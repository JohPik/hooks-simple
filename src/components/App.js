import React from 'react'

class App extends React.Component{

  state = { ressource: 'posts'}

  render() {
    return (
      <div>
        <div>
          <button onClick={ () => this.setState({ ressource: 'posts' }) }>Posts</button>
          <button onClick={ () => this.setState({ ressource: 'ToDos' }) }>ToDos</button>
        </div>
        {this.state.ressource}
      </div>
    )
  }
}
export default App
