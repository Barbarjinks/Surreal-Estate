import React from 'react';
import { shallow } from 'enzyme';
import Alert from '../../src/components/Alert';

it('renders an error message', () => {
  const wrapper = shallow((
    <Alert message="Error!" />));

  expect(wrapper.find('.Alert').text()).toBe('Error!');
});

it('renders a success message', () => {
  const wrapper = shallow((
    <Alert message="Great Success!!" success />
  ));
  expect(wrapper.find('.Alert.success').text()).toBe('Great Success!!');
});
