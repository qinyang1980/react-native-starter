import { Button } from 'antd-mobile';
import React from 'react';
import styled from 'styled-components/native';

export const Home = ({ navigation }) => {
  const onClick = () => navigation.navigate('CounterDemo');

  return (
    <Container>
      <Title>Home Screen</Title>
      <Button type="primary" onClick={onClick}>Go to CounterDemo Screen.</Button>
    </Container>
  );
};

// style
///////////////////////////////////////////////////

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 20;
  text-align: center;
  margin-bottom: 10;
`;
