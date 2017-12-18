import { Button } from 'antd-mobile';
import { shallow } from 'enzyme';
import * as React from 'react';
import { Text } from 'react-native';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { Counter, Title } from '../../components';

describe('CounterTesting', () => {
  beforeEach(() => {
    // disable the warn & error
    // tslint:disable
    console.warn = jest.fn();
    console.error = jest.fn();
  });

  it('renders correctly', () => {
    const store = { count: 0, total: 1, increment: () => { }, decrement: () => { } };
    renderer.create(<Counter store={store} />);
  });

  it('renders correctly with defaults', () => {
    const incrementClick = jest.fn();
    const decrementClick = jest.fn();
    const store = { count: 0, total: 1, increment: incrementClick, decrement: decrementClick };

    const wrapper = shallow(<Counter store={store} />);

    // const Title = styled.Text`
    //   font-size: 20;
    //   text-align: center;
    //   margin-bottom: 5;
    // `;

    expect(wrapper.find(Text)).toHaveLength(2);
    expect(wrapper.find(Button)).toHaveLength(2);
    expect(wrapper.find(Title)).toHaveLength(1);

    // wrapper.find(Button).at(1).props().onPress();

    // expect(onButtonClick.mock.calls.length).toBe(1);

    // expect(wrapper.find(Button)).toHaveLength(2);
    // expect(wrapper.find(Button).first().prop('title')).toBe('-');
    // expect(wrapper.find(Button).at(1).prop('title')).toBe('+');


    // expect(wrapper.find(T).render().text()).toContain('Hello');
    // expect(wrapper.find(Text).render().text()).toEqual('Hello World!');
  });
});
