import React from 'react'
import styled from 'styled-components';

const FooterEl = styled.footer`

    position: absolute;
    z-index: 800;
    width: 100%;
    background: ${props => props.theme.slateGrey};
    bottom: 0;
    height: 5rem;
    `

export default function Footer() {
    return (
        <FooterEl>
            this is a footer
        </FooterEl>
    )
}
