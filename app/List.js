import React from 'react'

class List extends React.Component {
    render() {
        return (
            <ul>
                {this.props.friends.map(
                    (friend, index) => (
                        <li key={index}>
                            {friend}
                        </li>
                    )
                )}
            </ul>
        )
    }
}

export default List