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
    const store = { count: 0, total: 0, increment: () => { }, decrement: () => { }, reset: () => { } };
    const tree = renderer.create(<Counter store={store} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('structure correctly', () => {
    const incrementClick = jest.fn();
    const decrementClick = jest.fn();
    const resetClick = jest.fn();
    const store = { count: 3, total: 8, increment: incrementClick, decrement: decrementClick, reset: resetClick };

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
    const increment = jest.fn(() => { count++; total++ });
    const decrement = jest.fn(() => { count--; total++ });
    const reset = jest.fn(() => { count = 0; total = 0; })
    const store = { count, total, increment, decrement, reset };

    const wrapper = shallow(<Counter store={store} />);

    const button1Click: any = (wrapper.find(TestUtil.Button).at(0).prop("onClick") as any);
    const button2Click: any = (wrapper.find(TestUtil.Button).at(1).prop("onClick") as any);

    // simulate the clicks
    button1Click();
    button1Click();
    button1Click();
    button2Click();
    button2Click();

    expect(increment.mock.calls.length).toBe(3);
    expect(decrement.mock.calls.length).toBe(2);
    expect(count).toBe(1);
    expect(total).toBe(5);
  });
});
