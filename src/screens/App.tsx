import React, { Component } from 'react';
import { Counter } from '../components';
import { CounterStore } from '../stores/counter.store';

const store = new CounterStore();
export class App extends Component {
  public render(): JSX.Element {
    return (
      <Counter store={store} />
    );
  }
}
