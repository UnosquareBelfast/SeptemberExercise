import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import NavBar from '../pages/NavBar';
import SearchBar from '../pages/TodoList';
import TodoList from '../pages/TodoList';
import AddNewToDoListItem from '../pages/TodoList';
import DeletedItem from '../pages/DeletedItems';
import AboutUs from '../pages/AboutUs';
import { AddTaskButton } from '../pages/TodoList/components/AddNewToDoListItem/styled';
import { TodoListTitle } from '../pages/TodoList/styled';
import 'jest-styled-components';
import { mountWithTheme } from '../testUtilities';
import { theme } from '../theme';

describe('First React component test with Enzyme', () => {
    it('renders without crashing', () => {
        shallow(<App />);
     });
});

describe('Navbar component check', () => {
    it('renders without crashing', () => {
        shallow(<NavBar />);
    })
})

describe('To do list item check', () => {
    it('renders without crashing', () =>{
        shallow(<TodoList />);
    })
})

describe('Search bar check', () => {
    it('renders without crashing', () =>{
        shallow(<SearchBar />);
    })
})

describe('Add New To Do List Item check', () => {
    it('renders without crashing', () => {
        shallow(<AddNewToDoListItem />);
    })
})

describe('Deleted Item check', () => {
    it('renders without crashing', () => {
        shallow(<DeletedItem />);
    })
})

describe('About Us check', () => {
    it('renders without crashing', () => {
        shallow(<AboutUs />);
    })
})

describe('Add Task Button check', () => {
    it('renders without crashing', () => {
        shallow(<AddTaskButton />);
    })
})

describe('Add Task Button check click function', () => {
    it('clicks recorded when user clicks', () => {
    const addNewTask = jest.fn();
    const addTaskButton = mountWithTheme(<AddTaskButton onClick={addNewTask}> Add Task </AddTaskButton>);

    addTaskButton.find(AddTaskButton).simulate('click');
    expect(addNewTask).toHaveBeenCalled();
    })
})

describe('TodoListTitle', () => {
    it('Colour is driven from theme', () => {
        const btnStyle = mountWithTheme(<TodoListTitle>Test</TodoListTitle>);
        expect(btnStyle).toHaveStyleRule('color', theme.colours.title);
    })
})