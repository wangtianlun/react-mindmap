import React, { Component } from 'react';
import { render } from 'react-dom';
import { Toolbar, Editor } from '@src';

export default class App extends Component {
  render() {
    return (
      <div className="minder-editor-container" id="minder-container">
        <Toolbar />
        <Editor />
      </div>
    )
  }

  componentDidMount() {
    const minder = new kityminder.Minder({
      renderTo: '#minder-container'
    })
  }
}

render(<App />, document.getElementById('root'));