import React from 'react'

import RotaHeader from './rotaHeader/RotaHeader'
import Employee from './employee/Employee'

import { RotaContainer, EmployeesList } from './style-rota'

class Week {
    constructor(array){
        this.monday     = array[0] || 'off';
        this.tuesday    = array[1] || 'off';
        this.wednesday  = array[2] || 'off';
        this.thursday   = array[3] || 'off';
        this.friday     = array[4] || 'off';
        this.saturday   = array[5] || 'off';
        this.sunday     = array[6] || 'off';
    }
}

class Worker {
    constructor(name, role, id, week){
        this.name = name            || 'unknow';
        this.role = role            || 'unknow';
        this.id = id                || null;
        this.week = new Week(week   || []);
    }
}

let gedas = new Worker('gedas', 'developer', null, [{starting: '12:50', finishing: '15:00'}])
let julius = new Worker('julius', 'analist')

// console.log(gedas)

let people = [gedas, julius]


export default function Rota() {

    return (

        <RotaContainer id='rota'>

            <RotaHeader/>
            
            <EmployeesList>

                {people.map(person => (
                    <Employee key={person.name} employee={person}/>
                ))}

            </EmployeesList>

        </RotaContainer>
    )
}
