import styled from 'styled-components/macro';

export const TodoListTitle = styled.h1`
  color: ${({theme}) =>  theme.colours.title};
  font-size: 30px;
  text-transform: uppercase;
`;

export const ToDoCard = styled.div`
background-color: #f2f2f2;
border-color: #cccccc;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
border-radius: 5px;
padding: 20px 20px 20px 20px;
margin: 20px 20px 20px 20px;
min-width: 250px;
max-width: 20%;
text-align: center;
float: left;
overflow-wrap: break-word;
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

export const DeleteButton = styled.button`
     margin-top: 1em;
     `;

export const EditButton = styled.button`
margin-right: 1em;
margin-left: 1em;
margin-top: 1em;
     `;

export const CardRight = styled.div`
min-width:100px;
display: block;
justify-content: right;
     `;

export const CardLeft = styled.div`
display: inline;
justify-content: left;
     `;
