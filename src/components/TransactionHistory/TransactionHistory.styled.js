import styled from 'styled-components';

export const TableWraper = styled.table`
    margin: 50px auto;
    width: 600px;
    border-radius: 4px;
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
` 

export const TableHead = styled.thead`
    background-color: rgba(219, 232, 241, 0.623);
    font-size: 22px;
    font-weight: 500;
`

export const TableHeadName = styled.th`
    padding: 10px;
    border: 0.5px solid rgb(211, 202, 202);
`

export const TableRow = styled.td`
    padding: 10px;
    font-size: 18px;
    border: 0.5px solid rgb(211, 202, 202);
    text-align: center;
    color: ${(p) => p.theme.colors.gray};
`