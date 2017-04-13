// See http://webpack.github.io/docs/context.html#dynamic-requires

export default require.context('../assets', true, /^\.\//);
