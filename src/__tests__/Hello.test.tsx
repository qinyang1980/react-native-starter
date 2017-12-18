import { shallow } from 'enzyme';
import * as React from 'react';
import { Button, Text } from 'react-native';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import Hello from '../components/Hello';

describe('Hello', () => {
  beforeEach(() => {
    // disable the warn & error
    // tslint:disable
    console.warn = jest.fn();
    console.error = jest.fn();
  });

  it('renders correctly', () => {
    renderer.create(<Hello name="World" />);
  });

  it('renders correctly with defaults', () => {
    const onButtonClick = jest.fn();
    const wrapper = shallow(<Hello name="World" onIncrement={onButtonClick} />);
    wrapper.find(Button).at(1).props().onPress();

    expect(onButtonClick.mock.calls.length).toBe(1);

    expect(wrapper.find(Button)).toHaveLength(2);
    expect(wrapper.find(Button).first().prop('title')).toBe('-');
    expect(wrapper.find(Button).at(1).prop('title')).toBe('+');

    expect(wrapper.find(Text)).toHaveLength(1);
    expect(wrapper.find(Text).render().text()).toContain('Hello');
    expect(wrapper.find(Text).render().text()).toEqual('Hello World!');
  });
});
