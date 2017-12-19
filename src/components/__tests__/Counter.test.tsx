import { shallow } from 'enzyme';
import * as React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { Counter, TestUtil } from '../../components';

describe('CounterTesting', () => {
  beforeEach(() => {
    // disable the warn & error
    // tslint:disable
    console.warn = jest.fn();
    console.error = jest.fn();
  });

  it('renders correctly', () => {
    const store = { count: 0, total: 0, increment: () => { }, decrement: () => { } };
    renderer.create(<Counter store={store} />);
  });

  it('structure correctly', () => {
    const incrementClick = jest.fn();
    const decrementClick = jest.fn();
    const store = { count: 3, total: 8, increment: incrementClick, decrement: decrementClick };

    const wrapper = shallow(<Counter store={store} />);

    expect(wrapper.find(TestUtil.Text)).toHaveLength(2);
    expect(wrapper.find(TestUtil.Button)).toHaveLength(2);
    expect(wrapper.find(TestUtil.Container)).toHaveLength(1);
    expect(wrapper.find(TestUtil.Title)).toHaveLength(1);

    expect(wrapper.find(TestUtil.Title).render().text()).toEqual('Welcome to React Native Reactive!');
    expect(wrapper.find(TestUtil.Text).at(0).render().text()).toEqual('Counter: 3');
    expect(wrapper.find(TestUtil.Text).at(1).render().text()).toEqual('Total clicks: 8');
    expect(wrapper.find(TestUtil.Button).at(0).render().text()).toEqual('+');
    expect(wrapper.find(TestUtil.Button).at(1).render().text()).toEqual('-');
  });

  it('behaviors correctly', () => {
    let count = 0, total = 0;
    const incrementClick = jest.fn(() => {count++;total++});
    const decrementClick = jest.fn(() => {count--;total++});
    const store = { count: count, total: total, increment: incrementClick, decrement: decrementClick };

    // const wrapper = shallow(<Counter store={store} />);

    // wrapper.find(Button).at(1).props().onPress();

    // expect(onButtonClick.mock.calls.length).toBe(1);

    // expect(wrapper.find(Button)).toHaveLength(2);
    // expect(wrapper.find(Button).first().prop('title')).toBe('-');
    // expect(wrapper.find(Button).at(1).prop('title')).toBe('+');


    // expect(wrapper.find(T).render().text()).toContain('Hello');
    // expect(wrapper.find(Text).render().text()).toEqual('Hello World!');
  });
});
