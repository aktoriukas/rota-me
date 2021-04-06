import React, { useState } from 'react'

import Shift from './shift/Shift'

import { } from './style-employee'
import { 
    RotaLayout, 
    RotaItem } from '../style-rota'

import time from '../../../functions/timeCalculations'


export default function Employee(props) {

    const { name, role, id, week } = props.employee
    const [weekTotal, setWeekTotal] = useState(0)

    const weekdays = Object.keys(week)

    return (

        <RotaLayout>

            <RotaItem>{name}</RotaItem>

            {weekdays.map((key, index) => (

                <Shift 
                    id={id}
                    dispatch={props.dispatch}
                    key={index} 
                    weekday={key}
                    shift={week[key]}/>
            ))}

            <RotaItem>{time.minutesToString(weekTotal)}</RotaItem>

        </RotaLayout>
    )
}
