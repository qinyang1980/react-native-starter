import * as React from 'react';
import ListItem from '../components/ListItem';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<ListItem imageUrl="http://www.baidu.com" songName="test1" />);
});

// it('renders correctly with defaults', () => {
//   const listItem = shallow(<ListItem imageUrl="http://www.baidu.com" songName="test1"/>);
//   expect(listItem.find(Text).render().text()).toEqual('test1');
// });
