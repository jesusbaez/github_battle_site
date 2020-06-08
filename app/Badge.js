import React from 'react'
import PropTypes from 'prop-types'

class Badge extends React.Component {
    render() {
        const { authed, style, name, handle, img, addFriend } = this.props

        if (authed !== true) {
            return <p>You need to log in.</p>
        }

        return (
            <div style={style}>
                <img
                    style={{ width: 200, borderRadius: '50%' }}
                    src={img}
                />
                <h1 style={{ margin: 5 }}>{name}</h1>
                <h3 style={{ margin: 5 }}>@{handle}</h3>
                <button onClick={addFriend}>Add Friend</button>
            </div>
        )
    }
}

Badge.propTypes = {
    authed: PropTypes.bool,
    handle: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    style: PropTypes.object,
    addFriend: PropTypes.func.isRequired
}

// The prop-types package has already been included for you. You can access it via "PropTypes".

console.log(PropTypes)


export default Badge