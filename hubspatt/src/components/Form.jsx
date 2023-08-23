import React from 'react'
import { Fragment } from 'react'
const Form = () => {
  return (
    <Fragment>
      <form action="/">
        <div className='form'>
              <div>
              <div className='name'>
              <label className='label' htmlFor="name">Name: </label>
              <input type="text" id='name'  placeholder='Jack' /> <br />
              </div> 
              <div className='err'></div>
              <div className='surname'>
              <label className='label' htmlFor="surname">Surname: </label>
              <input type="text"  id="surname" placeholder='Wizard' />
              </div>
              <div className='err'></div>
              <div className='email'>
              <label className='label' htmlFor="email">Email: </label>
              <input type="email" id='email' placeholder='jackw2@gmail.com' />
              </div>
              <div className='err'></div>

              </div>
              <div>
              <div className='password'>
              <label className='label' htmlFor="password">Password: </label>
              <input type="password" id='password' />
              </div>
              <div className='err'></div>

              <div className='again-password'>
              <label className='label' htmlFor="againPassword">Again password: </label>
              <input type="password" id="againPassword" />
              </div>
              <div className='err'></div>

              <div>
                <input className='submit' type="submit" />
              </div>
              </div>
          </div>
            </form>
    </Fragment>
  )
}

export default Form