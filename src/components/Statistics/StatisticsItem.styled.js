import styled from 'styled-components';

export const InfoStatic = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid rgba(193, 206, 214, 0.623);
  background-color: rgba(219, 232, 241, 0.623);
  width: 100px;
  padding-top: 30px;
  padding-bottom: 30px;
`
export const StaticText = styled.span`
  font-weight: 500;
  font-size: 16px;
  color: ${(p) => p.theme.colors.white};
  :not(:last-child) {
    margin-bottom: 10px;
  }
`