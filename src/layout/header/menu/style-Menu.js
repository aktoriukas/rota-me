import styled from 'styled-components';


export const MenuEl = styled.ul`

    position: fixed;
    z-index: 900;
    height: 100%;
    width: 30%;
    background: 
        linear-gradient(167deg, 
            ${props => props.theme.darkPurple} 20%, 
            rgba(133,101,154,0.05) 100%);
    bottom: 0;
    right: -100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    list-style: none;
    justify-content: flex-start;
    padding:0;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 100%);
    transition: all 0.65s cubic-bezier(1,-0.60, 0, 1.6);
    backdrop-filter: blur(3px);
    &.open{
        right: -10%;
    }
    `

export const MenuItem = styled.li`

    cursor: pointer;
    padding: 1rem 0 1rem 4rem;
    font-size: 1.5rem;
    width: 100%;
    position: relative;
    color: ${props => props.theme.white};

    &:nth-child(1){
        margin-top: 5rem;
    }

    &:after{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        left: 100%;
        top: 0;
        background: ${props => props.theme.darkGreen};
        z-index: -1;
        transition: all .25s ease-in-out;
    }
    &:hover{
        &:after{
            left: 0;
        }
    }
    `