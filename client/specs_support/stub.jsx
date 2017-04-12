import React from 'react';
import PropTypes from 'prop-types';

export default class Stub extends React.PureComponent {
  static propTypes = {
    children: PropTypes.object.isRequired,
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}
