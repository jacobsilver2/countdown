import React, { Component } from "react";
import "../styles/Subscribe.css";

class Subscribe extends Component {
  state = {
    email: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.email) {
      fetch(`/api/memberAdd?email=${this.state.email}`)
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  };

  handleChange = e => {
    this.setState({ email: e.target.value.trim() });
  };

  render() {
    const { placeholder, buttonText } = this.props;

    return (
      <form className="subscribe" onSubmit={this.handleSubmit}>
        <input
          className="subscribe-email"
          type="email"
          placeholder={placeholder}
          onChange={this.handleChange}
          value={this.state.email}
        />
        <button type="submit" className="subscribe-button">
          {buttonText}
        </button>
      </form>
    );
  }
}

export default Subscribe;
