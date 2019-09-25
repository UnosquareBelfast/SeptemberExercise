import styled from 'styled-components/macro';

export const TodoListTitle = styled.h1`
  color: ${({ theme }) => theme.colours.title};
  font-size: 30px;
  text-transform: uppercase;
`;

export const ToDoCard = styled.div`
min-width: 20%;
display: flex;
  align-items: center;
  justify-content: center;
overflow-wrap: break-word;
flex-direction: row;
`;

export const ToDoAddTaskBox = styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
border-radius: 5px;
padding: 20px 20px 20px 20px;
min-width: 250px;
max-width: 300px;
text-align: center;
display:block;
margin: 0 auto;
`;

export const TaskBoard = styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
border-radius: 5px;
padding: 20px 20px 20px 20px;
text-align: center;
margin: 0 auto;
background-color: lightgray;
`;

export const DeleteButton = styled.button`
float:right;
     `;

export const CenterDiv = styled.div`
     text-align:center;
          `;


export const Modal = styled.div`
text-align: center;
background-color: lightpink; 
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
border-radius: 5px;
padding: 20px 20px 20px 20px;
min-width: 250px;
max-width: 300px;
margin-top: 2em;
display:block;
     `;

export const StyledDiv = styled.div`
display:flex;
flex-direction:row;
flex-wrap: wrap;
     `;     

export const DeleteToDo = styled.li`
color: black;
text-align: center;
`;