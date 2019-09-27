import styled from 'styled-components/macro';

export const TodoListTitle = styled.h1`
  color: ${({theme}) =>  theme.colours.title};
  font-size: 30px;
  text-transform: uppercase;
`;

export const ToDoCard = styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
border-radius: 5px;
padding: 20px 20px 20px 20px;
margin: 20px 20px 20px 20px;
min-width: 20%;
max-width: 20%;
text-align: center;
float: left;
overflow-wrap: break-word;
`;

export const ToDoAddTaskBox = styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
border-radius: 5px;
padding: 20px 20px 20px 20px;
min-width: 400px;
max-width: 500px;
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
     /* position:absolute;
     top:0;
     right:0; */
     `;

export const EditButton = styled.button`
float: right;
     `;

     export const AddTextArea = styled.textarea`
    display: block;
    margin: 0 auto;
    border: 2px solid palevioletred;
    border-radius: 3px;
    min-height: 100px;
    min-width: 300px;
    margin-bottom: 1em;
`;
