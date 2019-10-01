import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import TodoList from '../pages/TodoList'
import Archive from '../pages/Archive'
import AboutUs from '../pages/AboutUs'
import GenNavBar from '../pages/Components/GenNavBar'
import SearchBar from '../pages/TodoList/components/SearchBar'

// let wrapper;
// beforeEach(() => {
//     wrapper = shallow(<TodoList />);
// });

//doesn't work
  // it('should render GenNavBar', () => {
  //     expect(wrapper.find('GenNavBar'));
  // });

it('renders without crashing', () => {
  shallow(<App />);
});

it('renders TodoList', () => {
  shallow(<TodoList />);
});

it('renders Archive', () => {
  shallow(<Archive />);
});
it('renders AboutUs', () => {
  shallow(<AboutUs />);
});

it('renders NavBar', () => {
  let wrapper = shallow(<GenNavBar />);
  expect(wrapper.exists()).toBe(true);
});

it('Check Search', () => {
  const myMock = jest.fn();
  let wrapper = mount(<SearchBar handleChange={myMock} />);
  wrapper.find('input').simulate('change',{target: {value:'Hello'}});
  expect(myMock.mock.calls[0][0]).toBe('Hello');
  // expect(wrapper.find('input').props().value).toEqual('Hello');
});




// it('Check Search', () => {
//   let wrapper = shallow(<SearchBar handleChange={()=>{}} />);
//   wrapper.find('input').simulate('change',{target: {value:'Hello'}});
//   expect(wrapper.find('input').props().value).toEqual('Hello');
// });


