import React from 'react'

import { Span, BurgerButton } from './style-BurgerMenu'


export default function BurgerMenu(props) {
    return (
        <BurgerButton onClick={() => props.setMenu(!props.menu)}>
            <Span/>
            <Span/>
            <Span/>
        </BurgerButton>
    )
}
