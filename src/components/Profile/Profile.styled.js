import styled from 'styled-components';

export const Container = styled.div`
    margin: 50px auto;
    max-width: 300px;
    border-radius: 4px;
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
export const WrapImg = styled.div`
    text-align: center;
    padding-bottom: 15px;
`
export const Avatar = styled.img`
    width: 150px;
    height: auto;
    padding-top: 30px;
    padding-bottom: 30px;
    display: block;
    margin: 0 auto;
`

export const MainText = styled.p`
    font-weight: 800;
    font-size: 20px;
    padding-bottom: 10px;
`
export const Contact = styled.p`
    font-weight: 500;
    font-size: 16px;
    padding-bottom: 10px;
    color: ${(p) => p.theme.colors.gray}
`

export const Wraper = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const InfoBlock = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid rgba(193, 206, 214, 0.623);
  background-color: rgba(219, 232, 241, 0.623);
  width: 100px;
  padding-top: 15px;
  padding-bottom: 15px;
`
export const InfoText = styled.span`
    font-weight: 500;
    font-size: 14px;
    padding-bottom: 10px;
    color: ${(p) => p.theme.colors.gray}
`
