import { Provider } from 'mobx-react';
import React from 'react';
import { AppRegistry } from 'react-native';
import RootNavigator from './route';
import stores from './stores';

export default class ReactNativeStarter extends React.Component {
  public render(): JSX.Element {
    return (
      <Provider {...stores}>
        <RootNavigator />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('ReactNativeStarter', () => ReactNativeStarter);
