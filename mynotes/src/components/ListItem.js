import React from 'react'

const ListItem = (props) => {
    console.log('PROPS:', props)
    return (
        <div>
            <h3>{props.note.body}</h3>
        </div>
    )
}

export default ListItem
