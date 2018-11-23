import React, { Component } from "react";

class FetchExample extends Component {
  state = { bpi: {} };

  componentDidMount() {
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(res => res.json())
      .then(data => {
        const { bpi } = data;
        this.setState({ bpi });
      });
  }

  _renderCurrencies() {
    const { bpi } = this.state;

    const currencies = Object.keys(bpi);

    return currencies.map(currency => {
      return <div key={currency}>1 BT is {bpi[currency].rate}</div>;
    });
  }

  render() {
    return (
      <div className="App">
        <h4>Fetch API</h4>

        {this._renderCurrencies()}
      </div>
    );
  }
}

export default FetchExample;
