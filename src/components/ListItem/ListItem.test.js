import 'react-native';
import React from 'react';
import ListItem from './ListItem';

import renderer from 'react-test-renderer';

describe('ListItem', () => {
  it('sholud render correctly', () => {
    const listItem = renderer.create(<ListItem data={{ id: '12', name: 'test', pwd: '123' }} />).toJSON();
    expect(listItem).toMatchSnapshot();
  });
});
