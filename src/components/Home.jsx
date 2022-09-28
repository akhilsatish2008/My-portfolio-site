import React from 'react'
import HeroImage from '../assets/heroImage.png'
import  {TiArrowRightThick} from 'react-icons/ti'
import {Link} from "react-scroll"

 const Home = () => {
  return (
    <section title="hero-section" name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 '>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row mt-100'>
            <div className='flex flex-col justify-center h-full'>
                <h1 className='text-2xl sm:text-7xl font-bold text-white  pt-20 md:pt-60'>
                   Hi I am Akhil! I am a Full-Stack Software Developer
                </h1>
                <p className=' text-gray-500 py-4 max-w-md'>
                    I have 5 years of experience building and designing software. 
                    Currently, I love to work on web applications using technologies like React, Tailwind, Node JS and MongoDb.
                </p>
                <div className='flex justify-center md:justify-start'>
                    <Link to="portfolio" smooth duration={500}  className='  group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-violet-400  to-purple-600 font-bold cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                            <TiArrowRightThick size={25} className="ml-1"/>
                        </span>
                        
                    </Link>
                </div>
            </div>
        <div>
            <img src={HeroImage} alt="my professional headshot" className=' rounded-2xl mx-auto w-2/3 md:w-full mt-10 ' />
        </div>




        </div>
    </section>
  )
}
export default Home;