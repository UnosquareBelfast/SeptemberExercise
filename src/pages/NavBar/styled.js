import styled from 'styled-components';



export const BtnStyle=styled.button`
    padding: 20px;
    background:#3B8CF3;
    border-color: black;
    font-size:20px;
    height: 50px;
    margin-left: 30px;

    &:hover {
        background: white;
        border-color: #3B8CF3;
      }
    
`;

export const TodoNavTheme= styled.div`
  color: white;
  font-size: 45px;
  display:flex;
  flex: 1;
  flex-direction:row;
  justify-content: space-between;
  background: #3B8CF3;
  text-decoration: underline;
`;

export const TaskContainer=styled.div`

display:flex;
padding: 5px;
background: #3B8CF3;

`;

export const TodoListTitle = styled.h1`
  color: white;
  font-size: 45px;
  text-transform: uppercase;
  /* text-align: flex-start; */
  background: #3B8CF3;
  text-decoration: underline;
  float: left;
`;

export const LeftDiv=styled.div`
float:left;
background: #3B8CF3;
color:white;

`;

export const LeftSpan=styled.div`
`;

export const ButtonsRight = styled.div`

`