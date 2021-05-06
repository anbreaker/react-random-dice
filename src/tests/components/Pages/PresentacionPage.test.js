import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import { PresentacionPage } from '../../../components/Pages/PresentacionPage';

describe('Prueba en <PresentacionPage /> ', () => {
  test('Debe mostrar la <PresentacionPage /> correctamente', () => {
    const wrapper = shallow(<PresentacionPage />);

    expect(wrapper).toMatchSnapshot();
  });
});
