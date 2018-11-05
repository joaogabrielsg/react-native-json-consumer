import 'react-native';
import React from 'react';
import Message from './Message';

import renderer from 'react-test-renderer';

describe('Message', () => {
  it('sholud render correctly', () => {
    const message = renderer
      .create(<Message title="Test" message="test" buttonText="testButton" open={false} />)
      .toJSON();
    expect(message).toMatchSnapshot();
  });
});
