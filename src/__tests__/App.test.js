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
import {DeleteButton, UpdateButton, CancelButton, SaveButton} from '../pages/TodoList/components/TodoListItem/styled';
import {RestoreButton} from '../pages/DeletedItems/components/DeletedItem/styled';
import {SearchButton, ClearButton} from '../pages/TodoList/components/SearchBar/styled';
import { TodoListTitle } from '../pages/TodoList/styled';
import { mountWithTheme, shallowWithTheme } from '../testUtilities';
import { theme } from '../theme';
import {MemoryRouter} from 'react-router-dom';
import 'jest-styled-components';



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
    it('Add Task called when button clicked', () => {
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

describe('Delete Button check', () => {
    it('renders without crashing', () => {
        shallow(<DeleteButton />);
    })
})

describe('Delete Button check click function', () => {
    it('Delete function called when button clicked', () => {
    const DeleteTask = jest.fn();
    const deleteTaskButton = mountWithTheme(<DeleteButton onClick={DeleteTask}>Delete</DeleteButton>);

    deleteTaskButton.find(DeleteButton).simulate('click');
    expect(DeleteTask).toHaveBeenCalled();
    })
})

describe('Update Button check', () => {
    it('renders without crashing', () => {
        shallow(<UpdateButton />);
    })
})

describe('Update button check click function', () => {
    it('Update function called when button clicked', () => {
        const UpdateTask = jest.fn();
        const updateTaskButton = mountWithTheme(<UpdateButton onClick={UpdateTask}>Update</UpdateButton>);

        updateTaskButton.find(UpdateButton).simulate('click');
        expect(UpdateTask).toHaveBeenCalled();
    })
})

describe('Save Button check', () => {
    it('renders without crashing', () => {
        shallow(<SaveButton />);
    })
})

describe('Save button check click', () => {
    it('Save function called when button clicked', () => {
        const SaveTask = jest.fn();
        const saveTaskButton=mountWithTheme(<SaveButton onClick={SaveTask}>Save</SaveButton>);

        saveTaskButton.find(SaveButton).simulate('click');
        expect(SaveTask).toHaveBeenCalled();


    })
})

describe('Cancel Button check', () => {
    it('renders without crashing', () => {
        shallow(<CancelButton />);
    })
})

describe('Cancel Button check click function', () => {
    it('Cancel function called when button clicked', () => {
        const CancelTask = jest.fn();
        const cancelTaskButton = mountWithTheme(<CancelButton onClick={CancelTask}>Cancel</CancelButton>);

        cancelTaskButton.find(CancelButton).simulate('click');
        expect(CancelTask).toHaveBeenCalled();
    })
})

describe('Search Button check', () => {
    it('renders without crashing', () => {
        shallow(<SearchButton />);
    })
})

describe('Search Button check click function', () => {
    it('Search function called when button clicked', () => {
    const SearchFunction = jest.fn();
    const searchButton = mountWithTheme(<SearchButton onClick={SearchFunction}>Search</SearchButton>);

    searchButton.find(SearchButton).simulate('click');
    expect(SearchFunction).toHaveBeenCalled();

    })
    
})

describe('Clear Button check', () => {
    it('renders without crashing', () => {
        shallow(<ClearButton />);
    })
})


describe('Clear Button check click function', () => {
    it('Clear function called when button clicked', () => {
    const ClearFunction = jest.fn();
    const clearResultsButton = mountWithTheme(<ClearButton onClick={ClearFunction}>Clear Search Results</ClearButton>);
    
    clearResultsButton.find(ClearButton).simulate('click');
    expect(ClearFunction).toHaveBeenCalled();
    })
    
})

describe('Restore Button check', () => {
    it('renders without crashing', () => {
        shallow(<RestoreButton />);
    })
})

describe('Restore Button check click function', () => {
    it('Restore function called when button clicked', () => {
        const RestoreFunction = jest.fn();
        const restoreButton = mountWithTheme(<RestoreButton onClick = {RestoreFunction}>Restore</RestoreButton>);

        restoreButton.find(RestoreButton).simulate('click');
        expect(RestoreFunction).toHaveBeenCalled();
    })
})

describe('Testing NavBar routes', () => {
    it('Home link test', () => {
        const wrapper = mountWithTheme(<MemoryRouter><NavBar/></MemoryRouter>);
        expect(wrapper.find('Link').at(0).simulate('click'));
    })

    it('About link test', () => {
        const wrapper = mountWithTheme(<MemoryRouter><NavBar/></MemoryRouter>);
        expect(wrapper.find('Link').at(1).simulate('click'));
    })

    it('Deleted link test', () => {
        const wrapper = mountWithTheme(<MemoryRouter><NavBar/></MemoryRouter>);
        expect(wrapper.find('Link').at(2).simulate('click'));
    })

    it('Non existent link test', () => {
        const wrapper = mountWithTheme(<MemoryRouter><NavBar/></MemoryRouter>);
        expect(wrapper.find('Link').at(3).exists()).toBeFalsy();
    })
})










