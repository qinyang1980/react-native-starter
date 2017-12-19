import { inject } from 'mobx-react';
import React, { Component } from 'react';
import { Counter } from '../components';
import { STORE_COUNTER } from '../constants';

@inject(STORE_COUNTER)
export class CounterDemo extends Component {
  public render(): JSX.Element {
    return (
      <Counter store={this.props[STORE_COUNTER]} />
    );
  }
}
