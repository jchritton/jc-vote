import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import NavBar from '../../components/NavBar';

storiesOf('NavBar', module)
  .add('logged out', () => <NavBar />)
  .add('logged in', () => <NavBar loggedIn />);
