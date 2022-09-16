import React from 'react'


const About = () => {
  return (
    <div
      name="about"
      className="flex flex-col justify-center items-center w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white pt-20 "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full   ">
        <div className="pb-8 flex justify-center md:justify-start ">

          <p className=" text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-10 sm:text-xl ">
        "The problem isn't the problem, the problem is your attitude about the problem" -Captain Jack Sparrow
        I've always been a believer that any problem can be solved, an independent introvert, and a developer crazy about the latest gadgets. Today I work at home as a software developer at 100Devs. and I get to exhibit all these factors of who I am. I started learning coding when I was in high school, but it was always a hobby rather than a career goal. After working in industries like baking, customer service and project management, I realized that software development was the right field for me.
        </p>

        <br />

        <p className="text-10 sm:text-xl ">
        Since then, I've been working on countless freelance projects and always learning new technologies. Today, I work as a full-stack developer on a great team at 100devs, and I am learning machine learning on my own time. I'm familiar with various programming languages/frameworks ​​such as JavaScript, HTML, CSS, Java, Node.js, Express.js,React.js, and MongoDB , but I'm constantly adding new skills to my repertoire.
        </p>
      </div>
    </div>
  )
};
export default About
