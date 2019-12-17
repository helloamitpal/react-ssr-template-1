import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({ error });
    // You can also log error messages to an error reporting service here
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;

    if (error) {
      // Error path
      return (
        <h2>
          Something went wrong. Sorry for the inconvenience caused. Please try again after some
          time.
        </h2>
      );
    }
    // Normally, just render children
    return children;
  }
}
ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};

export default ErrorBoundary;
