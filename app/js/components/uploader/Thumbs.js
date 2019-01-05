import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Thumbs extends Component {
    render() {
      return(
        <div className='thumbs-container'>
          {this.props.files.map(file => (
            <div key={file.name}>
              <div>
                <img src={file.preview} />
              </div>
            </div>
          ))}
        </div>
      )
    }
}