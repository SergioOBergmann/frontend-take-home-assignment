import * as React from 'react';

import { render, RenderResult } from '@testing-library/react';

import Header from '../../../components/Header';

let documentBody: RenderResult;

describe('<Header />', () => {
  beforeEach(() => {
    documentBody = render(<Header />);
  });

  it('matches snapshot', () => {
    const { baseElement } = documentBody;
    expect(baseElement).toMatchSnapshot();
  });
});
