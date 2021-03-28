import React from 'react'

export default function Shift(props) {

    const { starting , finishing } = props.shift

    console.log(props.shift)

    return (
        <div>
            {starting}
        </div>
    )
}

