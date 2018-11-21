import React, { Component } from "react";

export default class Forms extends Component {
  constructor() {
    super();
    this.state = {
      inputName: "",
      inputTwitter: "@",
      inputTerms: true
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const name = this.inputName.value;
    const email = document.getElementById("twitter").value;

    console.log({ name, email });
  };

  handleChange = e => {
    this.setState({ inputTerms: e.target.checked });
  };

  render() {
    return (
      <div>
        <h4>Forumlarios</h4>

        <form onSubmit={this.handleSubmit}>
          <p>
            <label htmlFor="name">Nombre: </label>
            <input
              id="name"
              name="userName"
              placeholder="Introduce el nombre"
              ref={inputElement => (this.inputName = inputElement)}
              onChange={e => this.setState({ inputName: e.target.value })}
              value={this.state.inputName}
            />
          </p>

          <p>
            <label>Twitter: </label>
            <input
              id="twitter"
              name="twitterAccount"
              placeholder="Introduce Tu Twitter"
              value={this.state.inputTwitter}
              onChange={e => this.setState({ inputTwitter: e.target.value })}
            />
          </p>

          <p>
            <label>
              <input
                type="checkbox"
                onChange={this.handleChange}
                checked={this.state.inputTerms}
              />
              Accepted terms
            </label>
          </p>

          <button>Enviar</button>
        </form>
      </div>
    );
  }
}
