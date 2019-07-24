import React, { Component } from 'react';

interface IProps {
  children: any;
  name: string;
}

export default class Command extends Component<IProps, {}> {
  render() {
    const { children, name } = this.props;

    return (
      <div className="command" data-command={name}>
        { children }
      </div>
    )
  }
}