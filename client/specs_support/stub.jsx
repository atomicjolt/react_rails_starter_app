import React from 'react';

export default class Stub extends React.PureComponent {
  static propTypes = {
    children: React.PropTypes.object.isRequired,
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}
