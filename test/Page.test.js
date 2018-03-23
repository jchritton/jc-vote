/* global mount, shallow, render */

import React from 'react';

import Page from '../containers/Page';

describe('Page container tests', () => {
  it('should render correctly', () => {
    const testPage = shallow(<Page />);
    expect(testPage).toBeTruthy();
  });
});
