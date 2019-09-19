const { environment } = require('@rails/webpacker');

const graphqlLoader = {
  test: /\.(graphql|gql)$/,
  exclude: /node_modules/,
  loader: 'graphql-tag/loader'
};

// Insert json loader at the end of list
environment.loaders.append('graphql', graphqlLoader);

module.exports = environment;
