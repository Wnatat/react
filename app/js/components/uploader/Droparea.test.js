import React from 'react'
import {shallow} from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Droparea from './Droparea'

Enzyme.configure({ adapter: new Adapter() });

describe('Droparea component', () => {
  it('can drop a file', () => {
    const droparea = shallow(<Droparea tags={() => {}} thumbs={() => {}} progress={() => {}} />);

    expect(droparea.html()).toMatch('Click to select a file or drag it here.');
  })
})