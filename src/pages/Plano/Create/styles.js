import styled from 'styled-components';

export const Container = styled.div`
    padding-top: 30px;
    max-width: 750px;
    margin: 0px auto;
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
`;

export const Center = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 60px;
    list-style: none;
    padding-top: 50px;
`;
export const Card = styled.div`
    background: #fff;
    max-width: 233px;
    border-radius: 5px;

    form {
        display: flex;
        flex-direction: column;
        background: #d8d8d8;
        border-radius: 5px;
        padding: 10px;
    }
    .avatar {
        display: inline-block;
        background: linear-gradient(top, #f9f9f9, #e3e3e3);
        border: 1px solid #999;
        border-radius: 3px;
        padding: 5px 8px;
        outline: none;
        white-space: nowrap;
        -webkit-user-select: none;
        cursor: pointer;
        text-shadow: 1px 1px #fff;
        font-weight: 700;
        font-size: 10pt;
        max-width: 220px;
        margin-right: 30px;
    }
    span {
        color: black;
        margin: 0 0 10px;
        align-self: flex-start;
        font-weight: bold;
    }

    header {
        display: flex;
        align-self: center;
        align-items: center;

        strong {
            color: #000;
            font-size: 25px;
            margin: 0 15px;
        }
    }
`;
