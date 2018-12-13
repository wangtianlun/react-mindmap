import React, { Component } from 'react';

export default class Command extends Component {
  render() {
    const { children, name } = this.props;

    return (
      <div className="command" data-command={name}>
        { children }
      </div>
    )
  }
}