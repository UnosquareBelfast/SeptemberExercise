import styled from 'styled-components';

export const TodoListTitle = styled.h1`
  color: ${({theme}) =>  theme.colours.title};
  font-size: 45px;
  text-transform: uppercase;
  text-align: center;
  text-decoration: underline;
`;

export const AddToDoButtonContainer = styled.a`
padding: 20px;
color: black;
text-align:center;

`;

export const TaskContainer=styled.div`

//background:yellow;
padding:10px
display:flex;
flex-direction:row;
flex-wrap:wrap;
justify-content:space-between;
align-content: flex-start;
`;



export const ItemButtons=styled.div`
  display:flex;
  flex-direction:row;
  justify-content:flex-start;
  padding-left: 10px;
  padding-right: 10px;

`;


