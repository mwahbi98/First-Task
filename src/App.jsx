import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import image from "./assets/5.jpg";
import image1 from "./assets/3.jpg";
import image3 from "./assets/111.jpg"

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [color , setColor] = useState("black")

  return (
    <>
    <div className='container'>
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={image1} class="d-block w-100" alt="..."/>
      <div className="para">
        <span className='category'>Toronto ,<em>Canada</em></span>
        <div className='pa'>
          <h2>HURRY!
          <br/>
          GET THE BEST VILLA FOR YOU.
        </h2></div>
      </div>
    </div>
    <div class="carousel-item">
      <img src={image} class="d-block w-100" alt="..."/>
      <div className="para">
       <span className='category'>Toront ,<em>Canada</em></span>
       
        <p>.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={image3} class="d-block w-100" alt="..."/>
      <div className="para">
        <h2></h2>
        <p></p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
 
    </>
  )
}

export default App
