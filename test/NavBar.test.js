/* global mount, shallow, render */

import React from 'react';

import NavBar from '../components/NavBar';

describe('NavBar component tests', () => {
  it('should render correctly', () => {
    const testNav = shallow(<NavBar />);
    expect(testNav).toBeTruthy();
  });

  it('should recognize login prop', () => {
    const testNav = shallow(<NavBar />);
    testNav.setProps({ loggedIn: true });

    expect(testNav.containsMatchingElement(<span>Logout</span>)).toBeTruthy();
  });
});
