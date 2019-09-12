import styled from 'styled-components';

export const MyTodoBoard = styled.div`
  width: 90vw;
  background-color: #d7d1c9;
  border: 2px solid black;
  padding: 10px 10px;
`;

export const TodoListTitle = styled.h1`
  display: flex;
  justify-content: center;
  color: ${({theme}) =>  theme.colours.title};
  font-size: 40px;
  text-transform: uppercase;
  border-bottom: 4px solid #000000;
  font: bold 40px arial, sans-serif;
`;

export const AddTodoArea = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

export const AddTodo = styled.div`
  width: 250px;
  height: 200px;
  background-color: #F6D55C;
  border: 1px solid grey;
  box-shadow: 5px 7.5px #888888;
  padding: 10px;
  margin: 20px;
`;

export const AddTaskText = styled.div`
  height: 75%;
  display: flex;
  justify-content: center;
  background: content;
`;

export const TextArea = styled.textarea`
  width: 100%;
  background: none;
  border: 1px dashed grey;
  font: bold 30px arial, sans-serif;
  padding: 5px;
`;

export const AddTaskButton = styled.div`
  display: flex;
  justify-content: center;
  height: 20%;
  margin: 10px
`;

export const MyAddButton = styled.button`
  font: bold 15px arial, sans-serif;
`;

export const MyTodoList = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  padding: 10px;
`;
