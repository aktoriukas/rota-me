import React from 'react'

import { 
    HeaderLayout, 
    HeaderItem,
    HeaderText,
    HeaderDate } from './style-rotaHeader'

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
                <HeaderItem key={i}>
                    <HeaderText>Name</HeaderText>
                    <HeaderDate>{formatSimpleDate(day)}</HeaderDate>
                </HeaderItem>
            )
        }
        return weekdays
    }

    const week = constructWeekdays()

    return (
        <HeaderLayout>
            <HeaderItem>
                <HeaderText>Name</HeaderText>
            </HeaderItem>

            {week}

            <HeaderItem>
                <HeaderText>Total</HeaderText>
            </HeaderItem>

        </HeaderLayout>
    )
}
