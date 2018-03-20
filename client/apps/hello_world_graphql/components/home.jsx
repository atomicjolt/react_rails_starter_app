import React from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import assets from '../libs/assets';

export class Home extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      welcomeMessage: PropTypes.string,
    })
  }

  render() {
    const img = assets('./images/atomicjolt.jpg');

    return (
      <div>
        <img src={img} alt="Atomic Jolt Logo" />
        <p>{this.props.data.welcomeMessage} by <a href="http://www.atomicjolt.com">Atomic Jolt</a></p>
      </div>
    );
  }
}

export default compose(
  graphql(
    gql`
      query {
        welcomeMessage @client
      }
    `
  )
)(Home);
