import styled from 'styled-components';

export const ShiftContainer = styled.div`

    width: 100%;
    min-height: 2rem;
    position: relative;
    padding-bottom: 1rem;
`

export const DayOff = styled.div`

    position: absolute;
    width: 100%;
    height: 100%;
    background: grey;
    text-align: center;
`

export const TimeContainer = styled.div`


    display: flex;
    flex-direction: column;
    justify-content: center;
` 

export const IconContainer = styled.div`

    text-align: center;
    width: 100%;
    cursor: pointer;
    position: absolute;
    height: 1rem;
    bottom: 0;
    svg{
        transition: transform .25s ease-in-out;
    }
    &:hover{
        svg{
            transform: scale(1.2)
        }
    }
`

export const Input = styled.input`

    margin: auto;
`

export const DropdownMenu = styled.ul`

    position: absolute;
    z-index:200;
    top: 100%;
    list-style: none;
    margin:0;
    padding: 0;
    width: 100%;
    height: 100%;

    &.open{
        li{
            display: block;
        }
    }
`

export const DropdownItem = styled.li`

    position: relative;
    display: none;
    background: ${props => props.theme.celadon};
    transition: background .25s ease-in-out;
    padding: .25rem 0;

    &:hover{
        background: ${props => props.theme.darkGreen};
    }
`