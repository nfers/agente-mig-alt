import styled from 'styled-components'

const Table = styled.table`
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 80%;
    margin-top: 5px;
    margin-left: 10%;

    td, th {
        border: 1px solid #ddd;
        padding: 8px; 
    }
    tr > th {
        background-color: black;
        color: #ffffff
    }
    tr:nth-child(even){background-color: #c9c9c9;}

    tr:hover {background-color: #ddd;}
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #d0f0c6;
    color: #515151;
`;


export { Table }