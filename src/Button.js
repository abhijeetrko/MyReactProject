import React from 'react'

function Button(props) {
    return (
        <div>
            <button className='btn' onClick={props.onclick}>{props.name}</button>
        </div>
    )
}

export default React.memo(Button)
