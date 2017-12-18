import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

export const Details = () => (
  <Container>
    <Text>Details Screen</Text>
  </Container>
);

// style
///////////////////////////////////////////////////

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
