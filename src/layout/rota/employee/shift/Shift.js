import React from 'react'

import { ShiftContainer } from './style-shift'

export default function Shift(props) {

    const { starting , finishing } = props.shift

    console.log(props.shift)

    return (
        <ShiftContainer>

            {props.shift === 'off' ?
                <div>off</div>
                : 
                <div>
                    not off
                </div>
            }
        </ShiftContainer>
    )
}

