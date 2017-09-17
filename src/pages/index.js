import React from "react"
import Link from 'gatsby-link'

export default () =>
  <div style={{color: 'blue'}}>
    <h1>Hello there!</h1>
    <p>What a world.</p>
    <img src='http://lorempixel.com/400/200/' />
    <br />
    <Link to="/page-2/">Link</Link>
    <Link to="/counter/">Counter</Link>
  </div>
