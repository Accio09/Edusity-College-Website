import React from 'react'
import Nav from './Comp/Nav/Nav'
import Main from './Comp/Main/Main'
import Streams from './Comp/Streams/Streams'
import Heading from './Comp/Heading/Heading'
import AboutUs from './Comp/AboutUs/AboutUs'
import Gallery from './Comp/Gallery/Gallery'
import Say from './Comp/Say/Say'
import Cont from './Comp/Cont/Cont'
import Foot from './Comp/Foot/Foot'


const App = () => {
  return (
    <div>

      <Nav/>
      <Main/>
      <div className="container">
        <Heading subTitle = 'Our Programs' title='What We Offer'/>
      <Streams/>
      <AboutUs/>
      <Heading subTitle= 'Gallery' title= 'Campus Photos'/>
      <Gallery/>
      <Heading subTitle= 'Testimonials' title ="What Student's Say"/>
      <Say/>
      <Heading subTitle= "Contact Us" title='Get In Touch'/>
      <Cont/>
      <Foot/>
      
      </div>
    </div>
  )
}

export default App

