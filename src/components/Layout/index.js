import React from 'react'
import Footer from '../Footer';
import Navbar from '../Navbar';
import './index.css'

const Layout = ({children}) => {
  return (
    <div className='App'>
      {/* <Navbar/> */}
      {children}
      <Footer/>
    </div>
  )
}

export default Layout
