import React from 'react'
import axios from 'axios'

class RessourceList extends React.Component {

  state = { ressources: [] }

  async componentDidMount(){
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.ressource}`)
    this.setState({ ressources: response.data })
  }

  async componentDidUpdate(prevProps){
    if (prevProps.ressource !== this.props.ressource) {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.ressource}`)
      this.setState({ ressources: response.data })
    }
    return
  }


  render(){
    return(
      <div>{this.state.ressources.length}</div>
    )
  }

}

export default RessourceList
