import React from 'react';
import PropTypes from 'prop-types';

import Errors from './errors';

export default class Index extends React.Component {

  static propTypes = {
    children: PropTypes.node
  }

  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Errors />
        {this.props.children || ''}
      </div>
    );
  }
}
