import React from 'react'
import {shallow} from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Thumbs from '../../../app/js/components/uploader/Thumbs'

Enzyme.configure({ adapter: new Adapter() });

describe('Thumbs component', () => {
  it('can show a thumbnail of dropped file', () => {
    const file = new File([], 'foo')
    file.preview = 'foo.jpeg'
    const thumbs = shallow(<Thumbs files={[file]} />);

    expect(thumbs.exists('img')).toEqual(true);
  })
})