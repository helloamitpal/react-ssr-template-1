import React from 'react';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';

import ErrorBoundary from './components/molecules/ErrorBoundry';
import Header from './components/molecules/Header';
import Footer from './components/molecules/Footer';

const App = ({ route }) => (
  <div>
    <Header />
    <div className="container">
      <ErrorBoundary>{renderRoutes(route.routes)}</ErrorBoundary>
    </div>
    <Footer />
  </div>
);

App.propTypes = {
  route: PropTypes.objectOf(PropTypes.any)
};

App.defaultProps = {
  route: null
};

export default {
  component: App
};
