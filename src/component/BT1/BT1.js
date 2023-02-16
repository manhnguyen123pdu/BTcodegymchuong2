import React, { Component } from 'react'

export default class BT1 extends Component {
  render() {
    return (
      <div>{<h4>Browser's details: {navigator.userAgent}</h4>}</div>
    )
  }
}
