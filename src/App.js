import React, { Component } from 'react';
import BlockOne from 'components/BlockOne';
import BlockTwo from 'components/BlockTwo';

class App extends Component {
  render() {
    return (
      <div>
        <BlockOne title="Block One" subtitle="hello" />
        <BlockTwo title="Block Two" subtitle="goodbye" />
      </div>
    );
  }
}

export default App;
