import React, { Component } from "react";
import "./App.css";
import { GraphqlCodeBlock } from "graphql-syntax-highlighter-react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "query { id name }"
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  render() {
    return (
      <div className="App">
        <h1 className="MainTitle">GraphQL code pretty printer</h1>
        <h2 className="LeftTitle">Input unformatted GraphQL:</h2>
        <textarea
          className="InputCode"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <h2 className="RightTitle">Output pretty-printer, formatted GraphQL:</h2>
        <GraphqlCodeBlock
          className="GraphqlCodeBlock"
          queryBody={this.state.value}
        />
      </div>
    );
  }
}

export default App;
