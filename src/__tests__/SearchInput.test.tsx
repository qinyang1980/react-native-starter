// import { shallow } from 'enzyme';
import * as React from 'react';
// import { TextInput } from 'react-native';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import SearchInput from '../components/SearchInput';

function onChangeText(): void {
  // tslint:disable
  console.log('test');
}

it('renders correctly', () => {
  renderer.create(<SearchInput value="test1" placeholder="请输入" onChangeText={onChangeText} />);
});

// it('renders correctly with defaults', () => {
//   const hello = shallow(<SearchInput value="test1" placeholder="请输入" onChangeText={onChangeText} />);
//   expect(hello.find(TextInput).render().has('value')).toEqual('test1');
// });
