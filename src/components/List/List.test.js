import 'react-native';
import React from 'react';
import List from './List';

import renderer from 'react-test-renderer';

describe('List', () => {
  it('sholud render correctly', () => {
    const list = renderer.create(<List listItems={[]} />).toJSON();
    expect(list).toMatchSnapshot();
  });
});
