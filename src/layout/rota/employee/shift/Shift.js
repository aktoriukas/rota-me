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

import time from '../../../../functions/timeCalculations'

export default function Shift(props) {

    const { starting , finishing } = props.shift

    const { id, dispatch, shift, weekday } = props

    const [off, setOff] = useState(true)
    const [dropdown, setDropdown] = useState(false)
    const [totalHours, setTotalHours] = useState('00:00')
    const [startingTime, setStartingTime] = useState(starting || '00:00')
    const [finishingTime, setFinishingTime] = useState(finishing || '00:00')

    useEffect(() => {

        updateData()
        setOff(shift.off ? true : false)

    }, [shift, startingTime, finishingTime])


    const setDay = (opt) => { 
        switch(opt){
            case 'off':
                setOff(true) 
                setStartingTime('00:00')
                setFinishingTime('00:00')
                break

            case 'on':
                setOff(false) 
                break

            default:
                break
        }
    }

    const getTotal = () => {
        const startingMin = time.stringToMinutes(startingTime)
        const finishingMin = time.stringToMinutes(finishingTime)
        const totalMin = time.calculateTotal(startingMin, finishingMin)
        setTotalHours(time.minutesToString(totalMin))
        props.calculatePersonWeekTotal()
    }

    const updateData = () => {

        dispatch({
            type: 'update-shift', 
            payload: { 
                id: id, 
                weekday: weekday, 
                shift: { starting: startingTime, finishing: finishingTime } 
            }
        })
        getTotal()
    }

    return (
        <ShiftContainer className={off ? 'off' : ''}>

            {off ?
                <DayOff>
                    off
                </DayOff>
                : 
                <TimeContainer>
                    
                    <Container>
                        <Input 
                            onChange={e => setStartingTime(e.target.value)}
                            type='time' 
                            value={startingTime}/>

                        <Input 
                            onChange={e => setFinishingTime(e.target.value)}
                            type='time' 
                            value={finishingTime}/>

                    </Container>

                    <TotalHours>{totalHours}</TotalHours>

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

