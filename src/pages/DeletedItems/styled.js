import styled from 'styled-components';

export const MyTodoBoard = styled.div`
  width: 90vw;
  min-height: 90vh;
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
  margin-bottom: 0px;
`;

export const MyDeletedTodoList = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  padding: 10px;
`;

export const MyDeletedTodoNotes = styled.div`
  width: 250px;
  height: 200px;
  background-color: #F6D55C;
  border: 1px solid grey;
  box-shadow: 5px 7.5px #888888;
  padding: 10px;
  margin: 20px;
`;

export const MyDeletedTodos = styled.div`
  display: flex;
  justify-content: center;
  font: bold 30px arial, sans-serif;
  color: #333333;
  padding: 10px 0px;
`;

export const MyNavBar = styled.div`
  display: flex;
  justify-content: flex-start;
  background-color: #e4e4e4;
  border-left: 2px grey solid;
  border-right: 2px grey solid;
  border-bottom: 2px grey solid;
  font: bold 20px arial, sans-serif;
  `;
  
  export const MyNavButtons = styled.div`
  display: flex;
  justify-content: space-between;
  border-right: 2px grey solid;
  padding: 10px;
`;
