import { ThemeProvider } from 'styled-components';
import React, { useReducer, useState } from 'react';

import { theme } from './theme/theme'

import Header from './layout/header/Header';
import LandingPage from './layout/landingPage/LandingPage'
import Rota from './layout/rota/Rota'
import Footer from './layout/footer/Footer'
import LogInPopUp from './elements/pop-up/LogIn'

export default function App() {

  const [userLogin, setUserLogin] = useState(false)
  const [LogIn, setLogIn] = useState(false)
  const [SignIn, setSignIn] = useState(false)

  return (


    <div className="App">

      <ThemeProvider theme={theme}>

        <Header 
          setLogIn={setLogIn} 
          setSignIn={setSignIn} />

        { userLogin ? 
          <Rota/> 
          : 
          <LandingPage /> }

        { LogIn ? <LogInPopUp setLogIn={setLogIn} /> : ''}

        { SignIn ? 'Sign in screen' : ''}

        <Footer />

      </ThemeProvider>
    </div>
  );
}