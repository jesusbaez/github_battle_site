import React from 'react'

class Hello extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Baex'
        }

        this.updateName = this.updateName.bind(this)
    }

    updateName() {
        this.setState({
            name: 'Becky'
        })
    }

    render() {
        console.log(this.props)
        return(
            <React.Fragment>
                <h2>
                    Hello, {this.state.name}
                </h2>
                <button onClick={this.updateName}>Change Name</button>
            </React.Fragment>
        )
    }
}

export default Hello