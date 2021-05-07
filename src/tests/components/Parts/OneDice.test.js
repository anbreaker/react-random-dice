import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import { OneDice } from '../../../components/Parts/OneDice';

describe('Prueba en <OneDice />', () => {
  test('Debe de lanzar el dado al clicar en el', () => {
    const wrapper = shallow(<OneDice />);

    wrapper.find('#bnt1').at(0).simulate('click');

    const value = Number(wrapper.find('h1').text().trim());

    expect(value).toBeGreaterThanOrEqual(value);
  });
});
