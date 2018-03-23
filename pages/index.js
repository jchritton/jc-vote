import withRedux from 'next-redux-wrapper';
import Page from '../containers/Page';
import { compose, setDisplayName, pure, lifecycle, withProps } from 'recompose';
import { injectGlobal } from 'styled-components';
import configStore from '../store';

injectGlobal`
  *, *:after, *:before {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    font-family: "Montserrat", sans-serif;
    background: #F2F3D9;
  }
`;

const Index = compose(
  setDisplayName('IndexPage'),
  withProps({
    title: 'Welcome to the Freeform Vote!'
  }),
  lifecycle({
    componentDidMount() {
      console.log('Index page has mounted!');
    }
  }),
  pure
)(Page);

Index.getInitialProps = ({ store, isServer }) => ({ isServer });

export default withRedux(configStore, null, null)(Index);
