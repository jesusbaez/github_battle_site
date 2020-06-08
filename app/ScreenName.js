import React from 'react'

class ScreenName extends React.Component {
    render() {
      return (
        <h3>Username: {this.props.username} </h3>
      )
    }
}

export default ScreenName