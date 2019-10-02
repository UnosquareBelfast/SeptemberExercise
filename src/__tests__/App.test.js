import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import TodoList from '../pages/TodoList';
import AboutUs from '../pages/AboutUs';
import DeletedLog from '../pages/DeletedLog';
import { TodoAddButton } from '../pages/TodoList/styled';
import { ItemButton } from '../pages/TodoList/components/TodoListItem/styled';
import { mountWithTheme ,shallowWithTheme} from '../testUtilities';
import 'jest-styled-components';
import {theme} from '../theme';


describe('First React component test with Enzyme', () => {
    it('renders without crashing', () => {
        shallow(<App />);
     });
     
});

describe('To do list item check', () => {
    it('renders without crashing', () =>{
        shallow(<TodoList />);
    })
})

describe('About us check', () => {
    it('renders without crashing', () =>{
        shallow(<AboutUs />);
    })
})

describe('DeletedLog check', () => {
    it('renders without crashing', () =>{
        shallow(<DeletedLog />);
    })
})

describe('TodoAddButton style check', () => {
    it('renders without crashing', () =>{
        shallowWithTheme(<TodoAddButton>Test</TodoAddButton>);
    })
})

describe('Add Task Button check click function', () => {
    it('clicks recorded when user clicks', () => {
        const createItemOnList = jest.fn();
        const addTaskButton = mountWithTheme(<TodoAddButton variant="outline-primary" onClick={createItemOnList}> Add Task</TodoAddButton>);

        addTaskButton.find(TodoAddButton).simulate('click');
        expect(createItemOnList).toHaveBeenCalled();
    })
})

describe('Refresh Button check click function', () => {
    it('clicks recorded when user clicks', () => {
        const retrieveTodosForDisplay = jest.fn();
        const refreshButton = mountWithTheme(<TodoAddButton variant="outline-primary" onClick={retrieveTodosForDisplay}> Refresh</TodoAddButton>);

        refreshButton.find(TodoAddButton).simulate('click');
        expect(retrieveTodosForDisplay).toHaveBeenCalled();
    })
})

describe('Search Button check click function', () => {
    it('clicks recorded when user clicks', () => {
        const searchForTodoList = jest.fn();
        const searchButton = mountWithTheme(<TodoAddButton variant="outline-primary" onClick={searchForTodoList}> Search</TodoAddButton>);

        searchButton.find(TodoAddButton).simulate('click');
        expect(searchForTodoList).toHaveBeenCalled();
    })
})

describe('Save Button check click function', () => {
    it('clicks recorded when user clicks', () => {
        const saveItem = jest.fn();
        const saveButton = mountWithTheme(<ItemButton variant="outline-primary" onClick={saveItem}> save</ItemButton>);

        saveButton.find(ItemButton).simulate('click');
        expect(saveItem).toHaveBeenCalled();
    })
})

describe('toggleUpdateMode Button check click function', () => {
    it('clicks recorded when user clicks', () => {
        const toggleUpdateMode = jest.fn();
        const toggleUpdateModelButton = mountWithTheme(<ItemButton variant="outline-primary" onClick={toggleUpdateMode}> toggleUpdateMode</ItemButton>);

        toggleUpdateModelButton.find(ItemButton).simulate('click');
        expect(toggleUpdateMode).toHaveBeenCalled();
    })
})

describe('Delete Button check click function', () => {
    it('clicks recorded when user clicks', () => {
        const deleteItem = jest.fn();
        const deleteItemButton = mountWithTheme(<ItemButton variant="outline-primary" onClick={deleteItem}> delete </ItemButton>);

        deleteItemButton.find(ItemButton).simulate('click');
        expect(deleteItem).toHaveBeenCalled();
    })
})