import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import TodoList from '../pages/TodoList';
import AboutUs from '../pages/AboutUs';
import { mountWithTheme } from '../testUtilities';
import { theme } from '../theme';

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