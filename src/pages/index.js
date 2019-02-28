import React, { Component } from "react"
import { Link } from "gatsby"
export default class index extends Component {
  render() {
    return (
      <div>
        <h1>Hello Gatsby!</h1>
        <p>What a world.</p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
        <Link to="/contact/">Contact</Link>
      </div>
    )
  }
}
