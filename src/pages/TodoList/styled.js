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

export const TitleContainer = styled.div`
  //background:khaki;
  text-align:center;
  margin:10px 10px 10px 10px;
  width:200px;
  height:150px;
  font-size: xx-large;
  padding-top:10px;

`;

export const TaskContainer=styled.div`

//background:yellow;
padding:10px
display:flex;
flex-direction:row;
flex-wrap:wrap;
justify-content:space-between;
`;



export const ItemButtons=styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  padding-left: 10px;
  padding-right: 10px;
`;


