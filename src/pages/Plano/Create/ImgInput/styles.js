import styled from 'styled-components';

export const Container = styled.div`
    float: left;
    margin-bottom: 10px;
    padding-top: 30px;
    input {
        content: 'Select some files';
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
        margin-right: 20px;
    }
`;
