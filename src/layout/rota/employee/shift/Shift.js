import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'


import { 
    ShiftContainer, 
    DayOff,
    TimeContainer,
    IconContainer,
    Input } from './style-shift'

export default function Shift(props) {

    const { starting , finishing } = props.shift

    const [off, setOff] = useState(props.shift === 'off' ? true : false)
    const [startingTime, setStartingTime] = useState(starting || '00:00')
    const [finishingTime, setFinishingTime] = useState(finishing || '00:00')

    return (
        <ShiftContainer>

            {off ?
                <DayOff>
                    off
                </DayOff>
                : 
                <TimeContainer>
                    <Input 
                        onChange={e => setStartingTime(e.target.value)}
                        type='time' 
                        value={startingTime}/>
                    <Input 
                        onChange={e => setFinishingTime(e.target.value)}
                        type='time' 
                        value={finishingTime}/>

                </TimeContainer>
            }
            <IconContainer>
                <FontAwesomeIcon icon={faAngleDown} />
            </IconContainer>

        </ShiftContainer>
    )
}

