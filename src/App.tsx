import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from '../components/home';
import Projects from '../components/projects';
import ContactMe from '../components/contactMe';
import React from 'react';

function App() {

  const homeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
   
  return (
    <div className="App m-5 ">
      <div className="fixed flex flex-col gap-4" >
        <a href="#home" onClick={() => {
          if(homeRef && homeRef.current) {
            homeRef.current.scrollIntoView({behavior:'smooth', block: 'start'})
          }
        }}><p className="underline text-xl hover:no-underline">home</p></a>
        <a href="#projects"><p className="underline text-xl hover:no-underline" >projects</p></a>
        <a href="#contactinfo"><p className="underline text-xl hover:no-underline">contact me</p></a>
      </div>
      <div ref={homeRef} className='static'>
        <Home/>
      </div>
      <div ref={projectsRef} className='static'>
        <Projects/>
      </div>
      <div ref={contactRef} className='static'>
        <ContactMe/>
      </div>
    </div>
  )
}


export default App
