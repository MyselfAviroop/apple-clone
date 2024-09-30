import React, { useState } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo,smallHeroVideo } from '../utils';





const Hero = () => {

const[videoSrc,setvideoSrc] = useState(window.innerWidth<768?smallHeroVideo : heroVideo)



useGSAP(()=>{
gsap.to('#hero',{ opacity: 1 ,delay: 1.8})
gsap.to('#button',{ opacity: 1 ,delay: 1.8})
}, [] )



















  return (
    <section id='hero' className='w-full nav-height bg-black relative '>

<div className='h-5/6 w-full flex-col flex-center '>

<p  id= "hero" className='hero-title 
' >Iphone 15 Pro</p>

<div className='md:w-10/12 w-9/12'>
  <video  autoPlay muted playsInline={true} key={videoSrc}>
    <source src={videoSrc} type='video/mp4' />
  </video>
</div>
<div  id='button'  className='flex flex-col items-center opacity-0 translate-y-20'>


<a href="#highlights" className='btn'>Buy</a>
</div>
</div>
    </section>
  )
}

export default Hero
