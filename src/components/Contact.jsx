import React from "react";

const Contact = () => {
  return (
  <section
      title="contact me"
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white pt-20"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-10 flex justify-center md:justify-start">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </h2>
          
        </div>
    
        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/209bb568-289b-4797-a0ee-064213ab75e0"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-violet-500 to-purple-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 font-bold">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;