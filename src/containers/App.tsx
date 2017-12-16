import React, { Component } from 'react';
import Counter from '../components/Counter';
import { CounterStore } from '../stores/counter.store';

const appState = new CounterStore();
export default class App extends Component {
  public render(): JSX.Element {
    return (
      <Counter appState={appState} />
    );
  }
}
