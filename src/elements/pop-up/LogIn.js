import React from 'react'
import { 
    PopUp, 
    H2, 
    Close, 
    Input, 
    Label } from './style-popUp';


export default function LogIn(props) {
    return (

        <PopUp>
            <Close onClick={() => props.setLogIn(false)}>✖</Close>
            
            <H2>Log In</H2>

            <Input placeholder='username'/>

            <Input placeholder='password'/>

            <Input type='submit'/>

        </PopUp>
    )
}