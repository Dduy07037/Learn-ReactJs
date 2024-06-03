import React, { Component } from 'react'

export default class DataBinding extends Component {

    name ='Đinh Đức Duy';

  render() {

    return (



      <div>
        <h1>Hello {this.name} </h1>
      </div>
    )
  }
}
