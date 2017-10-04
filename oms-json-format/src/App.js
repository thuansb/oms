import React, { Component } from 'react';
import './App.css';

const defaultInput = {
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

      //TODO: check valid object

      // flatten the object
      const flatten = [];
      Object.keys(inputJson).forEach(key => {
        inputJson[key].forEach(item => {
          flatten.push(item);
        })
      });

      // Recursive function to find children
      const findChildren = (id, inputs) => {
        const result = [];
        inputs.forEach(item => {
          if (item.parent_id === id) {
            item.children = findChildren(item.id, inputs);
            result.push(item);
          }
        });
        return result;
      }

      output = JSON.stringify(findChildren(null, flatten)); 
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
    const InvalidInputMessage = <span className="App-main-editor--error">(not valid input data)</span>;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">JSON Formatter Demo</h1>
        </header>
        <div className="App-main">
          <div className="App-main-editor">
            <div>Input (editable field) {!this.state.isValid && InvalidInputMessage}</div>
            <textarea rows="30" cols="80" defaultValue={JSON.stringify(defaultInput)} onChange={(e) => this.handleInputChange(e.target.value)} />
          </div>
          <div className="App-main-display">
            <div>Output</div>
            <textarea rows="30" cols="80" readOnly value={this.state.output} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;