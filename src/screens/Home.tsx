import React from 'react';
import { Button, Text } from 'react-native';
import styled from 'styled-components/native';

export const Home = ({ navigation }) => {
  const onPress = () => navigation.navigate('Details');

  return (
    <Container>
      <Text>Home Screen</Text>
      <Button
        onPress={onPress}
        title="Go to details"
      />
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
