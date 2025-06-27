import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";
import astronautHelmet from "../assets/astronaut-helmet.png"
import deadEye from "../assets/dead-eye.png"
import stack from "../assets/stack.png"
import envelope from "../assets/envelope.png"
import "../styles/nav.css";


export default class Nav extends Component {
  render() {
    return (
      <div>
        <img src={astronautHelmet}/>
        <img src={deadEye}/>
        <img src={stack}/>
        <img src={envelope}/>
      </div>
    );
  }
}
