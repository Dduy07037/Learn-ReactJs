import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    
    var noSp = {
        margin:0,
        padding:0,
      }

  
    return (
      <div style={noSp} className=' border border-3 border-info my-3'>
        <div>
            <p className='text-secondary-subtle bg-secondary text-center p-4'>
                500x325
            </p>
        </div>
        <div>
            <h6 className='text-center'>
                Card title
            </h6>
            <p className='text-center mx-2'>
            The sun dipped below the horizon, painting the sky in hues of orange, pink, and purple. .
            </p>
        </div>
        <div className='bg-secondary-subtle'>
            <div className='p-3 text-center'>
                <button type='button' className='btn bg-primary border text-white'>
                    Find our market
                </button>
            </div>
        </div>
      </div>
    )
  }
}
