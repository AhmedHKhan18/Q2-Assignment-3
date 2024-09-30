'use client'

import Header from "./components/header"
import Footer from "./components/footer"
import Typewriter from 'typewriter-effect'; 

export default function App(){
  return(
    <div className="">
      <section>
      <Header/>
      <div className="h-screen flex justify-between items-center px-32">
      <div>
    <h1 className="text-8xl font-semibold"><span className="text-3xl text-emerald-200 font-semibold">Hello 👋 my name is</span><br/>Ahmed</h1>
    <h1 className="text-5xl font-semibold my-4">
    <Typewriter
        onInit={(typewriter) => { 
          setInterval(()=>{
            typewriter.typeString('Front-End Developer') 
              .callFunction(() => { 
                console.log('String typed out!'); 
              }) 
              .pauseFor(2500) 
              .deleteAll() 
              .callFunction(() => { 
                console.log('All strings were deleted'); 
              }) 
              .start(); 
            typewriter.typeString('Tech Entusiast') 
              .callFunction(() => { 
                console.log('String typed out!'); 
              }) 
              .pauseFor(2500) 
              .deleteAll() 
              .callFunction(() => { 
                console.log('All strings were deleted'); 
              }) 
              .start(); 
            typewriter.typeString('Entrepreneur') 
              .callFunction(() => { 
                console.log('String typed out!'); 
              }) 
              .pauseFor(2500) 
              .deleteAll() 
              .callFunction(() => { 
                console.log('All strings were deleted'); 
              }) 
              .start(); 
            typewriter.typeString('Full-Stack Developer') 
              .callFunction(() => { 
                console.log('String typed out!'); 
              }) 
              .pauseFor(2500) 
              .deleteAll() 
              .callFunction(() => { 
                console.log('All strings were deleted'); 
              }) 
              .start(); 
            },2500)
          }} 
          />
          </h1>
      <p className="text-2xl max-w-xl">I like building and breaking things on the Internet!</p>
      <button className="px-6 py-4 my-4 rounded-lg bg-emerald-200 text-blue-700 font-semibold">About me</button>
      </div>
      <div>
        <img src="https://avatars.githubusercontent.com/u/154304084?v=4" className="rounded-full h-96"/>
      </div>
      </div>
      </section>
      <Footer/>
    </div>
  )
}