import styled from 'styled-components';

export const Span = styled.span`
    height: 8px;
    width: 90%;
    background-color: ${props => props.theme.darkPurple};
    margin: 0 auto;
    position: relative;
    border-radius: 20px;
    box-shadow: 0 0 2px ${props => props.theme.white};

    `

export const BurgerButton = styled.div`

    height: 4rem;
    width: 4rem;
    gap: .5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    &:hover span {
        &:nth-child(1) {
        }
        &:nth-child(2) {
        }
        &:nth-child(3) {
        }
    }
    `
