import React, { Fragment } from 'react'
import Login from './Login'
import Navbar from './Navbar'
import Home from './Home'
import Form from './Form'
const Main = () => {
  return (
    <Fragment>
        <Login/>
        <Navbar/>
        <Home/>
        <Form/>
    </Fragment>
  )
}

export default Main