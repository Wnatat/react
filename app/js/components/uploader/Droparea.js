import React, { Component } from "react";
import ReactDOM from "react-dom";
import Dropzone from 'react-dropzone';
import Axios from 'axios';
import classNames from 'classnames'
import ImmagaGateway from '../../lib/gateways/ImmagaGateway'
import RevokeUseCase from '../../lib/useCases/RevokeUseCase'
import PreviewPresenter from '../../lib/presenters/PreviewPresenter'
import PreviewUseCase from '../../lib/useCases/PreviewUseCase'
import UploadPresenter from '../../lib/presenters/UploadPresenter'
import UploadUseCase from '../../lib/useCases/UploadUseCase'
import UploadOptionsPresenter from '../../lib/presenters/UploadOptionsPresenter'

export default class Droparea extends Component {
  constructor() {
    super()

    this.state = {
      files: [],
      message: 'Click to select a file or drag it here.'
    }
  }

  onDrop(files) {
    new PreviewPresenter(
      new PreviewUseCase(files),
      this.props.thumbs,
      this.setPreview
    ).call()

    const options = new UploadOptionsPresenter(this.props.progress).call()

    new UploadPresenter(new UploadUseCase(
        new ImmagaGateway(Axios),
        files,
        options
      ), this.props.tags
    ).call()
  }

  setPreview = (preview) => {
    this.setState({
      files: this.preview,
      progress: 0
    })
  }

  onDragEnter() {
    this.setState({
      message: 'Drop files here...'
    })
  }

  onDragLeave() {
    this.setState({
      message: 'Click to select a file or drag it here.'
    })
  }

  onCancel() {
    this.setState({
      files: []
    });
  }

  componentWillUnmount() {
    new RevokeUseCase(this.state.files).call()
  }

  render() {
    return(
      <Dropzone accept="image/*" 
        onDrop={this.onDrop.bind(this)} 
        onDragEnter={this.onDragEnter.bind(this)}
        onDragLeave={this.onDragLeave.bind(this)}
        multiple={false}
      >
        {({ getRootProps, getInputProps, isDragActive, isDragReject, isDragAccept, acceptedFiles }) => (
          <div {...getRootProps()} className={classNames('droparea', { 
            'droparea--active': isDragActive,
            'droparea--reject': isDragReject 
          })}>
            <input {...getInputProps()} />

            { acceptedFiles.length == 0 ? (
              <p>{this.state.message}</p>
            ) : (
              ''
            )}
          </div>
        )}
      </Dropzone>
    )
  }
}