import React from 'react'

class RessourceList extends React.Component {

  render(){
console.log(this.props);
    return(
      <div>{this.props.ressource}</div>
    )

  }

}

export default RessourceList
