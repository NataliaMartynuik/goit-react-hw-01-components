import styled from 'styled-components';

export const Container = styled.ul`
    margin: 50px auto;
    max-width: 300px;
    border-radius: 4px;
    padding: 25px;
    background-color: #f2f8fc9f;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
export const WraperItem = styled.li`
    padding: 10px 10px;
    margin: 0 auto;
    background-color: ${(p) => p.theme.colors.white};
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    :not(:last-child) {
    margin-bottom: 20px;
    
    }

`