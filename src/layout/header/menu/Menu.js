import React from 'react'

import { MenuEl, MenuItem} from './style-Menu'

export default function Menu(props) {

    const { setLogIn, setMenu, setSignIn } = props

    const handleClick = (button) => {

        setMenu(false)

        switch(button){
            case 'signIn':
                setSignIn(true)
                break
            case 'logIn':
                setLogIn(true)
                break
            default:
                break
        }
    }

    return (

        <MenuEl>
            <MenuItem onClick={() => handleClick('signIn')}>Sign In</MenuItem>
            <MenuItem onClick={() => handleClick('logIn')}>Log In</MenuItem>
        </MenuEl>
    )
}
