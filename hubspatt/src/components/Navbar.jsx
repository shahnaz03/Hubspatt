import React from 'react'
import { Fragment } from 'react'
const Navbar = () => {
  return (
    <Fragment>
        <div className='nav'>
            <div className='logo'>
                <img src="./Images/hubspott-logo.png" alt="logo" width={160} height={90} />
            </div>
            <div className='sections'>
                <select className='softwere border'>
                    <option value="softwere">Softwere</option>
                </select>
                <span className='pricing'>Pricing</span>
                <select className='resources border'>
                <option value="resources">Resources</option>
                </select>
                <select className='partners border'>
                    <option value="partners">Partners</option>
                </select>
                <select className='about border'>
                    <option value="about">About</option>
                </select>
            </div>
        </div>
        <hr />
    </Fragment>
  )
}

export default Navbar