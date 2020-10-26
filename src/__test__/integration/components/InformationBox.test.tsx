import * as React from 'react';

import { render, RenderResult } from '@testing-library/react';

import InformationBox from '../../../components/InformationBox';

let documentBody: RenderResult;

describe('<InformationBox />', () => {
  beforeEach(() => {
    documentBody = render(
      <InformationBox
        desktopPrimaryMessageLabel="Monthly amount"
        mobilePrimaryMessageLabel="Monthly"
        primaryMessageValue="25,000"
        secondaryMessage={
          <>
            {"You're planning "}
            <span>
              <strong>1 monthly deposit</strong>
            </span>
            {' to reach your '}
            <strong>$25,000</strong>
            {' goal by '}
            <strong>November 2020.</strong>
          </>
        }
      />
    );
  });

  it('matches snapshot', () => {
    const { baseElement } = documentBody;
    expect(baseElement).toMatchSnapshot();
  });
});
