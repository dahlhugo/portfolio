import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from '../components/home';
import Projects from '../components/projects';
import ContactMe from '../components/contactMe';

function App() {

  return (
    <div className="App m-5 ">
      <div className="fixed flex flex-col gap-4" >
        <a href="#"><p className="underline text-xl hover:no-underline">home</p></a>
        <a href="#"><p className="underline text-xl hover:no-underline" >projects</p></a>
        <a href="#"><p className="underline text-xl hover:no-underline">contact me</p></a>
      </div>
      <div className='static'>
        <Home/>
      </div>
      <div className='static'>
        <Projects/>
      </div>
      <div className='static'>
        <ContactMe/>
      </div>
    </div>
  )
}

export default App
