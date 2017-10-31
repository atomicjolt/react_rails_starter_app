import * as React from 'react';

type Props = {
  children?: React.Node
}

export default class Index extends React.Component<Props, {}> {

  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        {this.props.children || ''}
      </div>
    );
  }
}
