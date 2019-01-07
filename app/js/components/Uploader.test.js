import React from 'react'
import {mount} from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Uploader from './Uploader'

Enzyme.configure({ adapter: new Adapter() });

describe('Uploader component', () => {
  it('can show tags in list', () => {
    const uploader = mount(<Uploader />);

    expect(uploader.exists('.thumbs-container')).toEqual(true);
  })

  it('can show disabled cancel button', () => {
    const uploader = mount(<Uploader />);

    expect(uploader.exists('button.is-disabled')).toEqual(true);
  })

  it('can provide a callback to update thumbnails', () => {
    const uploader = new Uploader();
    uploader.setState = jest.fn()

    uploader.thumbs([])

    expect(uploader.thumbs).toBeInstanceOf(Function)
    expect(uploader.setState).toHaveBeenCalledWith({ files: [] })
  })

  it('can provide a callback to update progress', () => {
    const uploader = new Uploader();
    uploader.setState = jest.fn()

    uploader.progress(1, 100)

    expect(uploader.progress).toBeInstanceOf(Function)
    expect(uploader.setState).toHaveBeenCalledWith({ progress: 1, max: 100 })
  })
})