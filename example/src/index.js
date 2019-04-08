import React, { Component } from 'react';
import { render } from 'react-dom';
import { Toolbar, Editor } from '@src';

export default class App extends Component {
  state = {
    minder: null,
  }

  render() {
    return (
      <div className="minder-editor-container">
        <Editor minder={this.state.minder} />
      </div>
    )
  }

  componentDidMount() {
    const minder = new kityminder.Minder({
      renderTo: '#minder-container'
    });
      
    this.setState({
      minder,
    });
  }
}

render(<App />, document.getElementById('root'));