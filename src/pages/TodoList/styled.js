import styled from 'styled-components';

export const TodoListTitle = styled.h1`
  color: white;
  font-size: 45px;
  text-transform: uppercase;
  text-align: flex-start;
  background: #3B8CF3;
  text-decoration: underline;
`;
export const LinkButton = styled.div`
font-size: 30px;
border-bottom: 6px solid #3B8CF3;
background-color: lightgrey;
`;

export const TodoAdd = styled.div`
  color: white;
  font-size: 45px;
  text-transform: uppercase;
  text-align: center;
`;

export const TodoAddButton = styled.button`
  color: white;
  background: #3B8CF3;
  font-size: 30px;
  text-transform: uppercase;
  text-align: center;
`;

export const TaskContainer=styled.div`

//background:yellow;
padding:10px
display:flex;
flex-direction:row;
flex-wrap:wrap;
justify-content:space-between;
`;

export const ToDoItem=styled.div`

background:khaki;
padding:10px;
margin:10px 10px 10px 10px;
`;

export const ItemButtonSpacing=styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  padding-left: 10px;
  padding-right: 10px;
`;

export const ItemButton=styled.button`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  padding-left: 10px;
  padding-right: 10px;
`;

export const SearchButton=styled.button`

background: white;
height: 50px;
width: 5%;
`;

