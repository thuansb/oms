import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Editor from './components/Editor';
import Displayer from './components/Displayer';
import App from './App';

Enzyme.configure({ adapter: new Adapter() });

it('should renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('should renders Displayer', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.containsMatchingElement(Displayer)).toEqual(true);
});

it('should renders Editor', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.containsMatchingElement(Editor)).toEqual(true);
});

it('should renders correct title', () => {
  const title = <h1 className="App-title">JSON Formatter Demo</h1>;
  const wrapper = shallow(<App />);
  expect(wrapper.contains(title)).toEqual(true);
});


