import React, { Component } from "react";
import ReactDOM from "react-dom";
import Uploader from "./Uploader"
import Tags from "./Tags"

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      tags: []
    }
  }

  tags = (tags) => {
    this.setState({ tags: tags})
  }

  render() {
    return (
      <section className="balloon nes-container with-title">
        <h2 className="title">Image captioning</h2>

        <div className="messages">
          <div className="message -right">
            <div className="nes-balloon from-right">
              <p>Hey! Upload an image and see how it's tagged by machine learning</p>
            </div>
            <i className="nes-bcrikko"></i>
          </div>
        </div>

        <section className="balloon nes-container with-title">
          <h2 className="title">upload</h2>

          <Uploader tags={this.tags} />
        </section>

        <section className="balloon nes-container with-title">
          <h2 className="title">tags</h2>

          <Tags tags={this.state.tags} />
        </section>
      </section>
    );
  }
}
