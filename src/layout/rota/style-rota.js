import styled from 'styled-components';

export const RotaContainer = styled.div`

    width: 100%;
    height: auto;
    `

export const EmployeesList = styled.div`

    display: flex;
    flex-direction: column;
    `

export const RotaLayout = styled.div`

    display: grid;
    grid-gap: .25rem;
    margin-bottom: .25rem;
    grid-template-columns: repeat(9, 1fr);
    `

export const RotaItem = styled.div`

    `

export const LastRotaItem = styled.div`

    grid-Column: 9/10;
    text-align: center;
    background: ${props => props.theme.celadon};
    margin: auto;
    padding: .5rem 1rem;
    border-radius: .35rem;
    
    &:after{
        padding-left: .5rem;
        content: 'H';
    }

    &.overtime{
        background: ${props => props.theme.red};
        color: ${props => props.theme.white}
    }
    `