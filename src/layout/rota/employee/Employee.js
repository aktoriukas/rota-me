import React from 'react'

import Shift from './shift/Shift'

import { } from './style-employee'
import { 
    RotaLayout, 
    RotaItem } from '../style-rota'

export default function employee(props) {

    const { name, role, week } = props.employee

    const weekdays = Object.keys(week)

    return (

        <RotaLayout>

            <RotaItem>{name}</RotaItem>

            {weekdays.map((key, index) => (

                <Shift key={index} shift={week[key]}/>
            ))}

        </RotaLayout>
    )
}
