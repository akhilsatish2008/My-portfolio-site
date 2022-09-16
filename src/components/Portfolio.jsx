import React from "react";
import snakeGame from "../assets/portfolio/snakegame.png"
import comingSoon from "../assets/portfolio/comingsoon.png"


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: snakeGame,
    },
    {
      id: 2,
      src: comingSoon,
    },
    {
      id: 3,
      src: comingSoon,
    },
    {
      id: 4,
      src: comingSoon,
    },
    {
      id: 5,
      src: comingSoon,
    },
    {
      id: 6,
      src: comingSoon,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen pt-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pt-20 sm:pt-0">
        <div className="pb-8  ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                
                  <a href="https://snakeneedsloot.netlify.app"  target= "_blank"rel="noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </a>
                
                
                  <a href="https://github.com/akhilsatish2008/SnakeGame-" target= "_blank"rel="noreferrer"  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </a>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;