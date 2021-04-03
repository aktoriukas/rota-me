import React, { useReducer } from 'react'

import RotaHeader from './rotaHeader/RotaHeader'
import Employee from './employee/Employee'

import { RotaContainer, EmployeesList } from './style-rota'

export default function Rota() {

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
        constructor({name, role, id, week}){
            this.name = name            || 'unknow';
            this.role = role            || 'unknow';
            this.id = id                || null;
            this.week = new Week(week   || []);
        }
    }
    
    class WeekRota {
        constructor(people){
            this.workers = people.map(person => {
                return new Worker(person)
            });
        }
    }

    let gedas = {   
        name :'gedas', 
        role :'developer', 
        id: 1, 
        week: [{starting: '12:50', finishing: '15:00', date: '2021-04-05'}]}
    
    
    let julius = {   
        name :'julius', 
        role :'music', 
        id: 2, 
        week: [{starting: '12:50', finishing: '15:00', date: '2021-04-05'}]}
    
    let alice = {   
        name :'alice', 
        role :'manager', 
        id: 3, 
        week: [{starting: '12:50', finishing: '15:00', date: '2021-04-05'}]}


    let data = new WeekRota([gedas, julius, alice])

    const reducer = (state, action) => {

        switch(action.type){
            case 'clear-rota':

                // loop worker, then loop week & clean all shifts

                let emptyRota = state.workers.map(worker => {

                    for( let property in worker.week){
                        worker.week[property] = 'off'
                    }
                    return worker
                })
            return  new WeekRota(emptyRota) 
            break

            case 'update-shift':

                // loop workers, find matching id. Update weekday with new time.
                const { id , weekday, time } = action.payload
                const { starting, finishing } = time
                
                let updatedShiftRota = state.workers.map(worker => {

                    console.log(worker.id)
                    console.log(id)
                    if(worker.id !== id) return worker
                    worker.week[weekday].starting = starting
                    worker.week[weekday].finishing = finishing
                    return worker
                })
                console.log(updatedShiftRota)
            return new WeekRota(updatedShiftRota)
                
            default:
                throw new Error()
        }
    }

    const [state, dispatch] = useReducer(reducer, data)

    
    return (

        <RotaContainer id='rota'>

            <RotaHeader/>
            
            <EmployeesList>

                {state.workers.map(person => (
                    <Employee 
                        dispatch={dispatch}
                        key={person.name} 
                        employee={person}/>
                ))}

            </EmployeesList>
            <button onClick={() => dispatch({type: 'clear-rota'})}>reset all rota</button>

        </RotaContainer>
    )
}
