import React, { Component } from "react";
import Countdown from "./Countdown";
import Logo from "./Logo";
import logo from "../images/gear-with-holes.svg";
import Title from "./Title";
import Description from "./Description";
import "../styles/ComingSoon.css";
import Subscribe from "./Subscribe";
class ComingSoon extends Component {
  state = {
    countdown: {
      futureDate: "2020-12-31 00:00:00"
    },
    logo: {
      alt: "Spinning Gear",
      src: logo
    },
    title: {
      text: "Coming Soon!"
    },
    description: {
      text:
        "This website will be up and running real soon. Enter your email to get an update when it's up."
    },
    subscribe: {
      placeholder: "Enter Email Address",
      buttonText: "Submit"
    }
  };
  render() {
    const { countdown, logo, title, description, subscribe } = this.state;
    return (
      <div className="background">
        <Countdown futureDate={countdown.futureDate} />
        <Logo alt={logo.alt} src={logo.src} />
        <Title text={title.text} />
        <Description text={description.text} />
        <Subscribe
          placeholder={subscribe.placeholder}
          buttonText={subscribe.buttonText}
        />
      </div>
    );
  }
}

export default ComingSoon;
