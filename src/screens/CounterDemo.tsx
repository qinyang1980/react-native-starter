import React, { Component } from 'react';
import { Counter } from '../components';
import { CounterStore } from '../stores/counter.store';

const store = new CounterStore();
export class CounterDemo extends Component {
  public render(): JSX.Element {
    return (
      <Counter store={store} />
    );
  }
}
