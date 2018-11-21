import React, { Component } from "react";
import "./App.css";

class Box extends Component {
  render() {
    return (
      <div style={{ border: "1px solid #000", margin: 5, padding: 5 }}>
        {this.props.children}
      </div>
    );
  }
}

class Article extends Component {
  render() {
    return (
      <section>
        <h2>{this.props.title}</h2>
        <p>
          <em>Escrito por {this.props.author}</em>
        </p>
        <Box>{this.props.date}</Box>
        <article>{this.props.children}</article>
      </section>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h4>Children props</h4>

        <Article
          author="Pepe"
          date={new Date().toLocaleDateString()}
          title="Artículo sobre la prop children"
        >
          Esto es el contenido del children
        </Article>
      </div>
    );
  }
}

export default App;
