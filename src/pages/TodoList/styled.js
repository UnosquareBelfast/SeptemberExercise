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

export const MyTodoList = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  padding: 10px;
`;
