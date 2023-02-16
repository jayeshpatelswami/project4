import React, { Component } from 'react'
import loadingicon from './loadingicon.gif'

export default class Loading extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loadingicon} alt="loading" />
      </div>
    )
  }
}
