import React, { useState, useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'


import { 
    ShiftContainer, 
    DayOff,
    TimeContainer,
    IconContainer,
    Input,
    DropdownMenu,
    DropdownItem,
    Container,
    TotalHours } from './style-shift'

export default function Shift(props) {

    const { starting , finishing } = props.shift

    const { id, dispatch, shift, weekday } = props

    const [off, setOff] = useState(true)
    const [dropdown, setDropdown] = useState(false)
    const [startingTime, setStartingTime] = useState(starting || '00:00')
    const [finishingTime, setFinishingTime] = useState(finishing || '00:00')


    useEffect(() => {

        setOff(shift.off ? true : false)

    }, [shift])

    const setDay = (opt) => { 
        switch(opt){
            case 'off':
                setOff(true) 
                break

            case 'on':
                setOff(false) 
                break

            default:
                break
        }
    }

    const updateData = () => {
        dispatch({
            type: 'update-shift', 
            payload: { 
                id: id, 
                weekday: weekday, 
                time: { starting: startingTime, finishing: finishingTime } 
            }
        })
    }

    return (
        <ShiftContainer>

            {off ?
                <DayOff>
                    off
                </DayOff>
                : 
                <TimeContainer>
                    
                    <Container>
                        <Input 
                            onBlur={() => updateData()}
                            onChange={e => setStartingTime(e.target.value)}
                            type='time' 
                            value={startingTime}/>

                        <Input 
                            onBlur={() => updateData()}
                            onChange={e => setFinishingTime(e.target.value)}
                            type='time' 
                            value={finishingTime}/>

                    </Container>

                    <TotalHours>6:00</TotalHours>

                </TimeContainer>
            }
            <IconContainer onClick={() => setDropdown(!dropdown)}>
                <FontAwesomeIcon icon={faAngleDown} />

                <DropdownMenu 
                    className={dropdown ? 'open' : ''}>

                    <DropdownItem onClick={() => setDay('off')}>off</DropdownItem>
                    <DropdownItem onClick={() => setDay('on')}>working</DropdownItem>
                </DropdownMenu>

            </IconContainer>

        </ShiftContainer>
    )
}

