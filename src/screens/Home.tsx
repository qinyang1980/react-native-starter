import { Button } from 'antd-mobile';
import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

export const Home = ({ navigation }) => {
  const onClick = () => navigation.navigate('CounterDemo');

  return (
    <Container>
      <Text>Home Screen</Text>
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
