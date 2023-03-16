import React from "react";
import fontUrl from '/home/hugo/Development/portfolio/src/assets/fonts/LibreBaskerville-Regular.ttf'

const Home = () => {

  return (
    <div className="w-fit h-screen grid grid-cols-12 grid-rows-6" >

      <div className="col-span-7 col-start-5 row-start-2">
        <p className="text-xl">
          I'm Hugo Dahl!
        </p>
        <p className="text-lg">
          Currently a 4th year student in <a target="_blank" href="https://liu.se/utbildning/program/6cmen" className="underline hover:no-underline">
          Media Technology</a> at Linköping Univerity and aspiring Software Developer.
        </p>
      </div>
    </div>
  );
}


export default Home;