import React, { Component } from 'react';
import { render } from 'react-dom';
import { Toolbar, Editor } from '@src';

export default class App extends Component {
  render() {
    return (
      <div className="minder-editor-container">
        <Editor />
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));