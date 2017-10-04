import React, { Component } from 'react';
import beautify from 'json-beautify';
import formatTheInput from './utils/converter';
import Editor from './components/Editor';
import Displayer from './components/Displayer';

import './App.css';

// export this default data for unit test
export const defaultInput = {
  "0":
  [{
    "id": 10,
    "title": "House",
    "level": 0,
    "children": [],
    "parent_id": null
  }],
  "1":
  [{
    "id": 12,
    "title": "Red Roof",
    "level": 1,
    "children": [],
    "parent_id": 10
  },
  {
    "id": 18,
    "title": "Blue Roof",
    "level": 1,
    "children": [],
    "parent_id": 10
  },
  {
    "id": 13,
    "title": "Wall",
    "level": 1,
    "children": [],
    "parent_id": 10
  }],
  "2":
  [{
    "id": 17,
    "title": "Blue Window",
    "level": 2,
    "children": [],
    "parent_id": 12
  },
  {
    "id": 16,
    "title": "Door",
    "level": 2,
    "children": [],
    "parent_id": 13
  },
  {
    "id": 15,
    "title": "Red Window",
    "level": 2,
    "children": [],
    "parent_id": 12
  }]
};

const FIXED_SPACES = 80;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      output: '',
      isValid: true
    }
  }

  componentDidMount() {
    // run for the first time with default input
    this.handleInputChange(JSON.stringify(defaultInput));
  }

  handleInputChange = (data) => {
    let isValid = true;
    let output;

    try {
      const inputJson = JSON.parse(data);
      output = beautify(formatTheInput(inputJson), null, 2, FIXED_SPACES);
    } catch (error) {
      isValid = false;
      output = '';
    }

    this.setState({
      output,
      isValid
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">JSON Formatter Demo</h1>
        </header>
        <div className="App-main">
          <Editor
            defaultValue={beautify(defaultInput, null, 2, FIXED_SPACES)}
            cols={FIXED_SPACES}
            handleInputChange={this.handleInputChange}
            isValid={this.state.isValid}
          />
          <Displayer cols={FIXED_SPACES} output={this.state.output} />
        </div>
      </div>
    );
  }
}

export default App;