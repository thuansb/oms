import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Editor from './Editor';

Enzyme.configure({ adapter: new Adapter() });

it('should showing not valid input error', () => {
    const InvalidInputMessage = <span className="App-main-editor--error">(not valid input data)</span>;        
    const wrapper = shallow(<Editor isValid={false} cols={80} handleInputChange={()=>{}} defaultValue="{}" />)
    expect(wrapper.contains(InvalidInputMessage)).toEqual(true);
});

it('should NOT showing not valid input error', () => {
    const InvalidInputMessage = <span className="App-main-editor--error">(not valid input data)</span>;        
    const wrapper = shallow(<Editor isValid={true} cols={80} handleInputChange={()=>{}} defaultValue="{}" />)
    expect(wrapper.contains(InvalidInputMessage)).toEqual(false);
});


