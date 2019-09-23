import styled from 'styled-components';

export const TodoListTitle = styled.h1`
  color: ${({theme}) =>  theme.colours.title};
  font-size: 45px;
  text-transform: uppercase;
  text-align: center;
  text-decoration: underline;
  padding-top:-10px;
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

export const NothingMessage = styled.div`
  color:white;
  border:solid white 2px;
  margin: auto;
  font-size: xx-large;
  width:60%;
  text-align:center;
  margin-top: 200px;
  
  

`;






