import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Tags extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <ul className="nes-list is-circle">
        {this.props.tags.map((object, i) => <li key={object.toString()}>{object}</li>)}
      </ul>
    );
  }
}
