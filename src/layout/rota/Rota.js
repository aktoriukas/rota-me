import React from 'react'
import RotaHeader from './rotaHeader/rotaHeader'

import styled from 'styled-components';

const RotaContainer = styled.div`

    width: 100%;
    height: auto;
    `

export default function Rota() {
    return (
        <RotaContainer id='rota'>

            <RotaHeader/>
            
        </RotaContainer>
    )
}
