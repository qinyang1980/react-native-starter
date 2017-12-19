import { Button } from 'antd-mobile';
import { observer } from 'mobx-react/native';
import React, { Component } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

// interface
///////////////////////////////////////////////////
export interface CounterProps {
  total: number;
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

// component
///////////////////////////////////////////////////
@observer
export class Counter extends Component<{ store: CounterProps }, {}> {
  public render(): JSX.Element {
    return (
      <Container>
        <Title>Welcome to React Native Reactive!</Title>
        <Text>Counter: {this.props.store.count}</Text>
        <Text>Total clicks: {this.props.store.total}</Text>
        <Button type="primary" onClick={this.handleInc}>
          +
        </Button>
        <Button type="warning" onClick={this.handleDec}>
          -
        </Button>
      </Container>
    );
  }

  private handleInc = () => {
    this.props.store.increment();
  };

  private handleDec = () => {
    this.props.store.decrement();
  };
}

// style
///////////////////////////////////////////////////

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const Title = styled.Text`
  font-size: 20;
  text-align: center;
  margin-bottom: 5;
`;

export const TestUtil = { Title, Text, Button, Container };
