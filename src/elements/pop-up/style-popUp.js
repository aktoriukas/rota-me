import styled from 'styled-components';

export const PopUp = styled.div`

    width: 80%;
    height: 80%;
    max-width: 400px;
    max-height: 400px;
    padding: 2rem 1rem;
    box-shadow: 0 0 4px ${props => props.theme.darkPurple};
    position: fixed;
    left: 50%;
    top: 50%;
    display: flex;
    flex-direction: column;
    transform: translate(-50%, -50%);
    animation: slide-right .25s ease-in-out;

    @keyframes slide-right {
        0%{ left: -100%}
        100% { left: 50%; }
    }
    `

export const H2 = styled.h2`

    color: ${props => props.theme.darkPurple};
    `

export const Close = styled.span`

    position: absolute;
    right: .5rem;
    top: .5rem;
    cursor: pointer;
    color: ${props => props.theme.darkGreen};
    `

export const Input = styled.input`

    margin: .5rem auto;
    `

export const Label = styled.label`


    `