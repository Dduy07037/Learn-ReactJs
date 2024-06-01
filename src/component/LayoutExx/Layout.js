import React, { Component } from 'react'
import Layheader from './Layheader'
import Navigation from './Navigation'
import Content from './Content'
import Footer from './Footer'

export default class Layout extends Component {
  render() {

    var noSp = {
      margin:0,
      padding:0,
    }

    return (
      <div className='container-fluid'>
        <div className='row'>
            <div className='col-12 bg-dark'>
              <Layheader />
            </div>
        </div>
        <div className='row'>
            <div style={noSp} className='col-4'>
              <Navigation />
            </div>
            <div style={noSp} className='col-8'>
              
              <Content />
            </div>
        </div>
        <div className='row'>
            <div style={noSp} className='col-12 bg-warning-subtle'>
              
              <Footer />
            </div>
        </div>
      </div>
    )
  }
}
