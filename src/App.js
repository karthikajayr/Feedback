import React, { useEffect, useState } from 'react';
import video from "./assets/video.mp4";
import github from "./assets/github_logo.svg";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      const mobileWidthThreshold = 1280; // Adjust this value based on your requirements
      setIsMobile(window.innerWidth < mobileWidthThreshold);
    };

    // Check initial mobile status
    checkIsMobile();

    // Add event listener to check mobile status on window resize
    window.addEventListener('resize', checkIsMobile);

    // Clean up the event listener
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  if (isMobile) {
    // Code for mobile devices
    return (
      <>
        <div className="font-bold bg-gradient-to-l from-cyan-400 to-blue-500 min-h-screen">
          <div className="main flex flex-col lg:flex-row h-full">
            <div className="left basis-1/2 min-h-screen flex justify-center items-center border-white rounded-[20px] border-[2px] m-5 backdrop-blur-sm">
              Feedback.
            </div>
            <div className="right basis-1/2 flex min-h-screen justify-center items-center border-white rounded-[20px] border-[2px] m-5 backdrop-blur-sm">
              Check.
            </div>
          </div>
        </div>
      </>
    );
  } else {
    // Code for non-mobile (desktop) devices
    return (
      <>
        <div className="relative">
          <video
            autoPlay
            muted
            loop
            className="w-full h-auto"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: -1,
              objectFit: "cover",
              width: "100vw",
              height: "100vh",
            }}
          >
            <source src={video} type="video/mp4" />
          </video>

          <div className="main flex w-full h-screen font-black ">
            <div className="left flex-col basis-1/2 justify-center items-center border-white rounded-[20px] border-[2px] m-20 my-10 backdrop-blur-sm">

              <div className='left_heading text-4xl text-white pt-10 pl-10 pb-2'>
                Feedback.
              </div>

              <div className="flex flex-col">
                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  autoComplete='off'
                  required
                  className="m-6 mx-10 placeholder:text-gray-500 text-white  outline-none border-b-2 border-white p-2 bg-transparent"
                />
              </div>

              <div className="flex flex-col">
                <input
                  type='email'
                  name="email"
                  placeholder="E-Mail*"
                  autoComplete='off'
                  required
                  className="m-6 mx-10 placeholder:text-gray-500 text-white  outline-none border-b-2 border-white p-2 bg-transparent"
                />
              </div>

              <div className="flex flex-col">
                <input
                  type='text'
                  name="occupation"
                  placeholder="Occupation*"
                  autoComplete='off'
                  required
                  className="m-6 mx-10 placeholder:text-gray-500 text-white outline-none border-b-2 border-white p-2 bg-transparent"
                />
              </div>

              <div className="flex flex-col">
                <input
                  type='text'
                  name="organization"
                  placeholder="Organization"
                  autoComplete='off'
                  className="m-6 mx-10 placeholder:text-gray-500 text-white outline-none border-b-2 border-white p-2 bg-transparent"
                />
              </div>

              <div className="flex flex-col">
                <input
                  type='text'
                  name="githubusername"
                  placeholder="Github Username"
                  autoComplete='off'
                  className="m-6 mx-10 placeholder:text-gray-500 text-white outline-none border-b-2 border-white p-2 bg-transparent"
                />
              </div>

              <div className="flex flex-col">
                <input
                  type='text'
                  name="linkedinprofile"
                  placeholder="LinkedIn Profile"
                  autoComplete='off'
                  className="m-6 mx-10 placeholder:text-gray-500 text-white outline-none border-b-2 border-white p-2 bg-transparent"
                />
              </div>


            </div>

            <div className="right basis-1/2 flex-col justify-center items-center border-white rounded-[20px] border-[2px] m-20 my-10 backdrop-blur-sm">

              <div className='left_heading text-2xl text-white pt-12 pl-10 pb-2'>
                Project Details.
              </div>

              <div className="flex flex-col">
                <input
                  type='text'
                  name="projectname"
                  placeholder="Project Name*"
                  autoComplete='off'
                  required
                  className="m-6 mx-10 placeholder:text-gray-500 text-white outline-none border-b-2 border-white p-2 bg-transparent"
                />
              </div>

              <div className='flex mx-10 justify-between items-center m-5'>
                <div className='flex  text-gray-300'>
                  Browse Projects in My Github Repositories
                </div>

                <div className="flex ">
                  <button class="flex justify-between items-center gap-5 border border-gray-500 hover:border-white text-gray-500 hover:text-white font-bold py-2 px-4 rounded ">
                    <img src={github} alt="Logo" className="logo h-[30px] w-[30px] " />
                    <div className=' hidden gitname:block'>
                      Github
                    </div>
                  </button>
                </div>
              </div>

              <div className="flex flex-col">
                <textarea
                  name="comments"
                  id="comments"
                  rows={3}
                  placeholder="Comments*"
                  autoComplete='off'
                  required
                  className="m-6 mx-10 placeholder:text-gray-500 text-white outline-none border-b-2 border-white p-2 bg-transparent"
                />
              </div >

            </div>
          </div>
        </div>

        <div className="text-center w-full p-1 text-sm md:text-base">
          <p>
            Copyrights &copy; 2023 Karthik R | Voidex | All Rights Reserved
          </p>
        </div>

      </>
    );
  }
};

export default App;
