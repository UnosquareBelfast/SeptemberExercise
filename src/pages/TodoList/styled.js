import styled from 'styled-components';


export const TodoListTitle = styled.h1`
  color: ${({theme}) =>  theme.colours.title};
  font-size: 30px;
  text-transform: uppercase;
  background-color: lightgrey;
  text-align: center;
  text-decoration: underline;
`;

export const TodoListSubTitle = styled.h2`
  color: pink;
  font-size: 30px;
  text-transform: uppercase;
  background-color: lightgrey;
  text-align: center;
  text-decoration: underline;
`;

export const TodoNavBar = styled.button`
  color: pink;
  border-color: black; 
  background: lightgrey;
  display:flex;
  font-size: 20px;
`;

export const TodoAdd = styled.div`
  color: black;
  font-size: 45px;
  text-align: center;
  display: flex;
`;


export const AddToDoButtonContainer = styled.a`
padding: 20px;
color: white;
text-align: center;
`;

export const TitleContainer = styled.div`
background: lightgrey;
text-align: center;
margin: 10px 10px 10p 10px;
width: 200px;
height: 150px;
font-size: xx-large;
padding-top: 10px;
justify-content: space-between;
`;

export const TaskContainer = styled.div`
background: lightgrey;
text-align: center;
padding: 50px;
display: center;
flex-direction: row;
flex-wrap: wrap;
`;

export const ToDoItem = styled.div`
background: lightgrey;
padding: 100px;
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
background: lightgrey;
border: 1px solid white;
display: inline-block;
padding: 100px;
margin-right: 100px;
margin-left: 50px;
width: 220px;
height: 100px;
text-align: center;
`;

export const AddTaskButton = styled.button`
background: white;
margin-top: 100px;
margin-bottom: 100px;
margin-right: 150px;
margin-left: 80px;
text-align: center;
padding-right: 10px;
padding-bottom: 7px;
`;

