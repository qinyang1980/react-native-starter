import { Button } from 'antd-mobile';
import { observer } from 'mobx-react/native';
import React, { Component } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

// 接口
///////////////////////////////////////////////////
export interface Props {
  total: number;
  count: number;
  increment: () => void;
  decrement: () => void;
}

// 组件实现
///////////////////////////////////////////////////
@observer
export default class Counter extends Component<{ appState: Props }, {}> {
  public render(): JSX.Element {
    return (
      <Container>
        <Title>
          Welcome to React Native Reactive!
        </Title>
        <Text>Counter: {this.props.appState.count}</Text>
        <Text>Total clicks: {this.props.appState.total}</Text>
        <Button type="primary" onClick={this.handleInc}>+</Button>
        <Button type="warning" onClick={this.handleDec}>-</Button>
      </Container>
    );
  }

  private handleInc = () => {
    this.props.appState.increment();
  };

  private handleDec = () => {
    this.props.appState.decrement();
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
