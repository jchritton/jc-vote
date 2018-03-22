import React from 'react';

import NavBar from '../components/NavBar';

describe('NavBar component tests', () => {
  it('should render correctly', () => {
    const testNav = shallow(<NavBar />);
    expect(testNav).toBeTruthy();
  });
});
