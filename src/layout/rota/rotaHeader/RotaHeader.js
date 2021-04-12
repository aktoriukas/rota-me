import React from 'react'

import { 
    HeaderText,
    HeaderDate } from './style-rotaHeader'

import {
    RotaItem,
    RotaLayout  } from '../style-rota';

export default function rotaHeader() {


    const formatSimpleDate = (date) => {
        return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
    }

    const constructWeekdays = (monday = new Date()) => {
        let weekdays = []

        for(let i = 0; i < 7; i++){
            let day = new Date(monday)
            day.setDate(day.getDate() + i)

            weekdays.push(
                <RotaItem key={i}>
                    <HeaderText>{day.toLocaleString("default", {weekday: "long"})}</HeaderText>
                    <HeaderDate>{formatSimpleDate(day)}</HeaderDate>
                </RotaItem>
            )
        }
        return weekdays
    }

    const week = constructWeekdays()

    return (
        <RotaLayout className='rota-header'>
            <RotaItem>
                <HeaderText>Name</HeaderText>
            </RotaItem>

            {week}

            <RotaItem>
                <HeaderText>Total</HeaderText>
            </RotaItem>

        </RotaLayout>
    )
}
