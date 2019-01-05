import React, { Component } from "react";
import ReactDOM from "react-dom";
import classNames from 'classnames'
import Droparea from './uploader/Droparea'
import Thumbs from './uploader/Thumbs';

export default class Uploader extends Component {
  constructor() {
    super()

    this.state = {
      files: [],
      progress: 0,
      max: 100
    }
  }

  thumbs = (files) => {
    this.setState({ files: files})
  }

  progress = (progress, max) => {
    this.setState({ progress: progress, max: max })
  }

  render() {
    return (
      <div>
        <Droparea tags={this.props.tags} thumbs={this.thumbs} progress={this.progress} />

        <Thumbs files={ this.state.files } />

        <button type="button" className={classNames('nes-btn', {
          'is-error': this.state.files.length > 0,
          'is-disabled': this.state.files.length == 0
        })}>Cancel</button>

        <progress className="nes-progress is-pattern" value={ this.state.progress } max={ this.state.max } ></progress>
      </div>
    );
  }
}
