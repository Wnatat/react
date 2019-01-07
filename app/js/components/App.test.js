import React from 'react'
import {mount} from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App'

Enzyme.configure({ adapter: new Adapter() });

describe('App component', () => {
  it('can show app', () => {
    const app = mount(<App />);

    expect(app.find('section.balloon.nes-container section.balloon')).toHaveLength(2);
  })

  it('can provide a callback to update progress', () => {
    const app = new App();
    app.setState = jest.fn()

    app.tags([])

    expect(app.tags).toBeInstanceOf(Function)
    expect(app.setState).toHaveBeenCalledWith({ tags: [] })
  })
})