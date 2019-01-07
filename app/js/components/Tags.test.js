import React from 'react'
import {shallow} from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Tags from './Tags'

Enzyme.configure({ adapter: new Adapter() });

describe('Tags component', () => {
  it('can show tags in list', () => {
    const tags = shallow(<Tags tags={['foo', 'bar']} />);

    expect(tags.find('li')).toHaveLength(2);
  })
})