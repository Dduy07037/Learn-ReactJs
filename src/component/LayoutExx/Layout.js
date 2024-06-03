import React, { Component } from 'react'
import Layheader from './Layheader'
import Footer from './Footer'
import Banner from './Banner'
import Item from './Item'

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
        <div className='row col-8 position-relative top-0 start-50 translate-middle-x mt-3'>
            <div style={noSp} className='row bg-secondary-subtle border border-3 border-info py-5'>
              <Banner />
            </div>
            <div className='row'>
              <div className='col-3'>
                <Item />
              </div>
              <div className='col-3'>
                <Item />
              </div>
              <div className='col-3'>
                <Item />
              </div>
              <div className='col-3'>
                <Item />
              </div>
            </div>
        </div>
        <div className='row'>
            <div style={noSp} className='col-12 bg-dark'>
              
              <Footer />
            </div>
        </div>
      </div>
    )
  }
}
