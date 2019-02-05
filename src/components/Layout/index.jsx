import React, { Component } from 'react'
import MyNavbar from '../Navbar';

export class index extends Component {
  render() {
    const { children } = this.props
    return (
      <>
        <MyNavbar />
        {children}
      </>
    )
  }
}

export default index
