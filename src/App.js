import React, { useEffect, useState } from 'react';
import video from "./assets/video.mp4";

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

              <div className='left_heading text-4xl text-white pt-10 pl-10'>
                Feedback.
              </div>

              <div className="flex flex-col">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  autoComplete='off'
                  className="m-6 placeholder:text-gray-600 text-white rounded-lg outline-none border-b-2 border-white p-2 bg-transparent"
                />
              </div>




            </div>

            <div className="right basis-1/2 flex justify-center items-center border-white rounded-[20px] border-[2px] m-20 my-10 backdrop-blur-sm">
              Check.
            </div>
          </div>

        </div>
      </>
    );
  }
};

export default App;
