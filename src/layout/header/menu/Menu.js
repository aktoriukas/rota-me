import React from 'react'

import { MenuEl, MenuItem} from './style-Menu'

export default function Menu(props) {

    const { setLogIn, setMenu, setSignIn } = props

    const handleClick = (button) => {

        setMenu(false)

        switch(button){
            case 'signIn':
                setLogIn(false)
                setSignIn(true)
                break
            case 'logIn':
                setSignIn(false)
                setLogIn(true)
                break
            default:
                break
        }
    }

    return (

        <MenuEl className={props.menu ? 'open' : 'close'}>
            <MenuItem onClick={() => handleClick('signIn')}>Sign In</MenuItem>
            <MenuItem onClick={() => handleClick('logIn')}>Log In</MenuItem>
        </MenuEl>
    )
}
