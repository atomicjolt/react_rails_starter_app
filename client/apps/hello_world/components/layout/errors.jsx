import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { clearErrors } from 'atomic-fuel/libs/actions/errors';

const select = state => ({ errors: state.errors });

export class Errors extends React.Component {

  static propTypes = {
    clearErrors: PropTypes.func,
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.clearErrors();
    }, 5000);
  }

  render() {
    const errors = _.map(this.props.errors, error => <li>{error}</li>);
    return <ul>{errors}</ul>;
  }
}

export default connect(select, { clearErrors })(Errors);
