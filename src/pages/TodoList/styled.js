import styled from 'styled-components';


export const TodoListTitle = styled.h1`
  color: ${({theme}) =>  theme.colours.title};
  font-size: 30px;
  text-transform: uppercase;
  background-color: black;
  text-align: center;
  text-decoration: underline;
`;

export const TodoNavBar = styled.button`
  color: white;
  border-color: white; 
  background: black;
  display:flex;
  font-size: 20px;
`;

export const TodoAdd = styled.div`
  color: white;
  font-size: 45px;
  text-align: center;
  display: flex;
`;

export const TodoListSubTitle = styled.h2`
  color: purple;
  font-size: 30px;
  text-transform: uppercase;
  background-color: black;
  text-align: center;
  text-decoration: underline;
`;

export const AddToDoButtonContainer = styled.a`
padding: 20px;
color: black;
text-align: center;
`;

export const TitleContainer = styled.div`
background: black;
text-align: center;
margin: 10px 10px 10p 10px;
width: 200px;
height: 150px;
font-size: xx-large;
padding-top: 10px;
justify-content: space-between;
`;

export const TaskContainer = styled.div`
background: black;
text-align: left;
padding: 10px;
display: flex;
flex-direction: row;
flex-wrap: wrap;
`;

export const ToDoItem = styled.div`
background: black;
padding: 10px;
margin: 10px 10px 10px 10px;
`;

export const ItemButtons = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
padding-left: 10px;
padding-right: 10px;
`;

export const NewTask = styled.div`
justify-content: space-between;
background: purple;
border: 1px solid white;
display: inline-block;
padding: 10px;
margin: 10px 10px 10px 10px
width: 220px;
height: 100px;
text-align: center;
`;

export const AddTaskButton = styled.button`
background: purple;
text-align: center;
padding-right: 10px;
padding-bottom: 7px;
`;

export const TaskTextArea = styled.div`
background: purple;
margin: 10px 10px 10px 10px;
text-align: center;
`;