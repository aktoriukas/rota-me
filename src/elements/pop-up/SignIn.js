import React from 'react'

import { 
    PopUp, 
    H2, 
    Close, 
    Input, 
    Label } from './style-popUp';


export default function SignIn(props) {
    return (
        <PopUp>
            <Close onClick={() => props.setSignIn(false)}>✖</Close>

            <H2>Sign In</H2>
            
            <Input placeholder='username'/>

            <Input placeholder='email'/>

            <Input placeholder='password'/>

            <Input placeholder='re-password'/>

            <Input type='submit'/>

        </PopUp>
    )
}
