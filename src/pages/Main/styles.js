import styled from 'styled-components';

export const Container = styled.div`
    max-width: 600px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    header {
        display: flex;
        align-self: center;
        align-items: center;
        button {
            border: 0;
            background: none;
        }
        strong {
            color: #000;
            font-size: 25px;
            margin: 0 15px;
        }
    }
    ul {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 15px;
        margin-top: 30px;
    }
`;
export const Time = styled.li`
    padding: 20px;
    border-radius: 4px;
    background: #fff;
    strong {
        display: block;
        color: ${props => (props.atrasado ? 'red' : '#7159c1')};
        font-size: 20px;
        font-weight: normal;
    }
    div {
        display: flex;
        justify-content: flex-end;
    }
    opacity: ${props => (props.realizado ? 0.6 : 1)};
    p {
        color: #000;
        font-size: 18px;
        padding-top: 18px;
    }
    span {
        display: block;
        margin-top: 3px;
        color: #666;
    }
`;
