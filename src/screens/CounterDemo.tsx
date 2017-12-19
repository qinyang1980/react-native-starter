import { inject } from 'mobx-react';
import React, { Component } from 'react';
import { Counter, CounterProps } from '../components';
import { STORE_COUNTER } from '../constants';

// tslint:disable

@inject(STORE_COUNTER)
export class CounterDemo extends Component {

  public componentDidMount(): void {
  }

  public componentWillUnmount(): void {
  }

  public render(): JSX.Element {
    const store = this.props[STORE_COUNTER] as CounterProps;
    return (
      <Counter store={store} />
    );
  }
}
