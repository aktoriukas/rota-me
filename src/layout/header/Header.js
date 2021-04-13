import React, { useState } from 'react'
import styled from 'styled-components';

import logoSmall from '../../img/logo-small.svg'

import BurgerMenu from '../../elements/burgerMenu/BurgerMenu'
import Menu from './menu/Menu'

const HeaderEl = styled.header`

    background-color: ${props => props.theme.slateGrey};
    display: flex;
    justify-content: space-between;
    padding: .5rem 1rem 0;
    height: 4rem;
    `

export default function Header(props) {

    const [menu, setMenu] = useState(false)
    const { setLogIn, setSignIn} = props

    return (
        <HeaderEl>

            <a href='./'>
                <img src={logoSmall}/>
            </a>

            <BurgerMenu menu={menu} setMenu={setMenu}/>

            <Menu 
                menu={menu}
                setLogIn={setLogIn}
                setMenu={setMenu} 
                setSignIn={setSignIn} /> 

        </HeaderEl>
    )
}
