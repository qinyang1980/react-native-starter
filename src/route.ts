import { StackNavigator } from 'react-navigation';
import { CounterDemo, Home } from './screens';

const RootNavigator = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerTitle: 'Home'
    }
  },
  CounterDemo: {
    screen: CounterDemo,
    navigationOptions: {
      headerTitle: 'Counter Demo'
    }
  }
});

export default RootNavigator;
