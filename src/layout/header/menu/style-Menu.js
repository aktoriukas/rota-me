import styled from 'styled-components';


export const MenuEl = styled.ul`

    position: fixed;
    z-index: 900;
    height: calc(100% - 4.5rem);
    width: 20%;
    background: 
        linear-gradient(167deg, 
            ${props => props.theme.darkPurple} 20%, 
            rgba(133,101,154,0.05) 100%);
    right: 0;
    bottom: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    list-style: none;
    justify-content: flex-start;
    padding:0;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 100%);
    animation: slide-left .25s;
    backdrop-filter: blur(3px);

    @keyframes slide-left {
        0%{ right: -100%}
        100% { right: 0; }
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
        margin-top: 2rem;
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