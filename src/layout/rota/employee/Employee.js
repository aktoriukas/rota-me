import React from 'react'

import Shift from './shift/Shift'

import { } from './style-employee'
import { 
    RotaLayout, 
    RotaItem } from '../style-rota'

export default function employee(props) {

    const { name, role, id, week } = props.employee

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

        </RotaLayout>
    )
}
