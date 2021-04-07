import React, { useState, useEffect } from 'react'

import Shift from './shift/Shift'

import { } from './style-employee'
import { 
    RotaLayout, 
    RotaItem } from '../style-rota'

import time from '../../../functions/timeCalculations'


export default function Employee(props) {

    const { name, role, id } = props.employee
    const [weekTotal, setWeekTotal] = useState(0)
    const [week, setweek] = useState(props.employee.week)

    const weekdays = Object.keys(week)

    useEffect(() => {
        calculatePersonWeekTotal()


        // NOT WORKING
        if(props.employee.week !== week){
            calculatePersonWeekTotal()

        }

    }, [props.employee.week])

    const calculatePersonWeekTotal = () => {

        let totalMin = 0;

        weekdays.forEach((key, index) => {

            let starting = time.stringToMinutes(week[key].starting )
            let finishing = time.stringToMinutes(week[key].finishing )

            totalMin += time.calculateTotal(starting, finishing)
        })
        console.log(totalMin)

        setWeekTotal(totalMin)
    }


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
