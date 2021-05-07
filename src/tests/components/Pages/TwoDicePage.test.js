import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import { TwoDicePage } from '../../../components/Pages/TwoDicePage';

describe('Prueba en <TwoDicePage /> ', () => {
  test('Debe mostrar la <TwoDicePage /> correctamente', () => {
    const wrapper = shallow(<TwoDicePage />);

    expect(wrapper).toMatchSnapshot();
  });
});
