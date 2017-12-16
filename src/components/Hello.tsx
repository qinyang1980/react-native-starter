import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

function Hello({ name, enthusiasmLevel = 1, onIncrement, onDecrement }: Props): JSX.Element {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }

  return (
    <View style={styles.root}>
      <Text style={styles.greeting}>
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </Text>
    </View>
  );
}

export default Hello;

// styles

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    alignSelf: 'center'
  },
  buttons: {
    flexDirection: 'row',
    minHeight: 70,
    alignItems: 'stretch',
    alignSelf: 'center',
    borderWidth: 5
  },
  button: {
    flex: 1,
    paddingVertical: 0
  },
  greeting: {
    color: '#999',
    fontWeight: 'bold'
  }
});

// helpers

function getExclamationMarks(numChars: number): any {
  return Array(numChars + 1).join('!');
}
