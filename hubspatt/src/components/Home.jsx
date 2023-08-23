import React, { Fragment } from 'react'
const Home = () => {
  return (
    <Fragment>
        <div className='home'>
            <h1 className='basliq'>There's a better  way to grow.</h1>
            <p className='desc'>Marketing, sales, and service software that helps
                your business grow without compromise.
                Because "good for the business" should also
                 mean "good for the customer."
            </p>
            <button className='btn home-btn'>Get HubSpott Free</button>
            <p className='desc'>Get started with FREE tools, <br />
                and upgrade as you grow.
            </p>
        </div>

        <div className='chat'>
             <img src="./svg/chat.png" alt="chat svg" width={45} height={45} />
        </div>
        
    </Fragment>
  )
}

export default Home