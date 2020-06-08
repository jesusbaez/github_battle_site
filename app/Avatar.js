import React from 'react'

class Avatar extends React.Component {
    render() {
      return (
        <img src={this.props.img} />
      )
    }
}

export default Avatar