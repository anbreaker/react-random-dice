import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import { Jumbo } from '../../../components/Parts/Jumbo';

describe('Prueba en <Jumbo />', () => {
  test('Debe recibir por porps un title & text ', () => {
    const title = 'El titulo';
    const text = 'Texto de envio';

    const wrapper = shallow(<Jumbo title={title} text={text} />);

    const componetText = wrapper.find('ul').text();
    console.log(componetText);

    expect(componetText).toBe(text);
  });
});
