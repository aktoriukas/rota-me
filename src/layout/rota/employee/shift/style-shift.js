import styled from 'styled-components';

export const ShiftContainer = styled.div`

    width: 100%;
    min-height: 2rem;
    position: relative;
    padding:.25rem 0 1rem;
    background-color: ${props => props.theme.slateGrey};
    border-radius: .35rem;
`

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
`

export const TotalHours = styled.div`

    text-align: center;
    width: 100%;
    color: ${props => props.theme.white};
`

export const DayOff = styled.div`

    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center;
    font-family: ${props => props.theme.fontFredoka};
    font-size: 2.7rem;
    line-height: 0.8;
    color: ${props => props.theme.white};
    letter-spacing: 4px;
    text-transform: uppercase;
    opacity: 0.3;
`

export const TimeContainer = styled.div`


    display: flex;
    flex-direction: column;
    align-items: center;
` 

export const IconContainer = styled.div`

    text-align: center;
    width: 100%;
    cursor: pointer;
    position: absolute;
    height: 1rem;
    bottom: 0;
    color: ${props => props.theme.celadon};

    svg{
        transition: 
            transform .25s ease-in-out,
            color .5s ease-in-out;
    }
    &:hover{
        svg{
            transform: scale(1.2);
            color: ${props => props.theme.white};
        }
    }
`

export const Input = styled.input`

    border-radius: .35rem;
    margin: 0 .25rem;
    border: none;
    padding:.05rem .5rem;
    background: transparent;
    color: ${props => props.theme.white};

    &::-webkit-calendar-picker-indicator {
        background: none;
        display: none;
    }
    &:focus{
        outline: none;
    }
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