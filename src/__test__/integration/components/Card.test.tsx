import * as React from 'react';

import { render, RenderResult } from '@testing-library/react';

import Card from '../../../components/Card';

let documentBody: RenderResult;

describe('<Card />', () => {
  beforeEach(() => {
    documentBody = render(
      <Card iconImg="" iconText="House" title="Buy a house" />
    );
  });

  it('matches snapshot', () => {
    const { baseElement } = documentBody;
    expect(baseElement).toMatchSnapshot();
  });
});
