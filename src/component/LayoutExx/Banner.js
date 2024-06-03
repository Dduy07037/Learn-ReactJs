import React, { Component } from 'react'

export default class Banner extends Component {
  render() {
    return (
      <div className=''>
        <h1>
            A Warm Welcome!
        </h1>
        <p>
        The quick brown fox jumps over the lazy dog. This is a common sentence used to demonstrate the use of all letters of the alphabet. It is a pangram, a sentence or phrase that uses every letter of a given alphabet at least once.
        </p>
        <button type='button' className='btn bg-info text-white'>Call To Action!</button>
      </div>
    )
  }
}
