import 'react-native';
import React from 'react';
import Button from './Button';

import renderer from 'react-test-renderer';

describe('Button', () => {
  it('sholud render correctly', () => {
    const button = renderer.create(<Button title="Test" />).toJSON();
    expect(button).toMatchSnapshot();
  });
});
