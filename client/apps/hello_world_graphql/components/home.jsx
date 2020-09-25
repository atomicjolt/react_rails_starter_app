import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import assets from '../libs/assets';

export const GET_WELCOME = gql`
  query getWelcome($name: String!) {
    welcomeMessage(name: $name)
  }
`;

export default function home() {
  const { loading, error, data } = useQuery(GET_WELCOME, {
    variables: {
      name: 'World',
    },
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const img = assets('./images/atomicjolt.jpg');

  return (
    <div>
      <img src={img} alt="Atomic Jolt Logo" />
      <p>
        {data.welcomeMessage}
      </p>
      <p>
        by
        <a href="http://www.atomicjolt.com">Atomic Jolt</a>
      </p>
    </div>
  );

}
