import { StackNavigator } from 'react-navigation';
import { Details, Home } from './screens';

const RootNavigator = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerTitle: 'Home'
    }
  },
  Details: {
    screen: Details,
    navigationOptions: {
      headerTitle: 'Details'
    }
  }
});

export default RootNavigator;
