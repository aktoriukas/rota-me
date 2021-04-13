import styled from 'styled-components';

export const Span = styled.span`
    height: 8px;
    width: 90%;
    background-color: ${props => props.theme.darkPurple};
    margin: 0 auto;
    position: relative;
    border-radius: 20px;
    box-shadow: 
        0 0 1px ${props => props.theme.white},
        0 0 4px ${props => props.theme.darkGreen};
    transition: all .25s ease-in-out; 

    `

export const BurgerButton = styled.div`

    height: 4rem;
    width: 4rem;
    gap: .5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    z-index:9999;
    &:hover span {
        box-shadow: 0 0 5px ${props => props.theme.white};

        &:nth-child(1) {
        }
        &:nth-child(2) {
        }
        &:nth-child(3) {
        }
    }
    `
