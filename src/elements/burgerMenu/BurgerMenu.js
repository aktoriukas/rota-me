import React from 'react'
import { Divide as Hamburger } from 'hamburger-react'

export default function BurgerMenu(props) {
    return (

        <Hamburger 
            size={45}
            rounded={true}
            color={'white'}
            toggled={props.menu}
            toggle={props.setMenu}
        />
    )
}
