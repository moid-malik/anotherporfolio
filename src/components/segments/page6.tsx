const Page6 = () => {
    return (
      <div className="h-screen w-full p-4 mt-12">
        <div className="relative w-full h-full flex flex-col bg-black rounded-[50px] lg:px-6 lg:py-20 sm:py-24 py-8 sm:px-8 px-8">
          <video
            autoPlay
            muted
            loop
            className="lg:h-[30vw] absolute lg:top-[43%] lg:left-[77%] sm:left-[50%] left-[50%] sm:top-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]"
            src="/timer.mp4"
          />
          <div className="z-[10] lg:w-[52vw] lg:text-start sm:text-center text-center  text-zinc-400 leading-none flex flex-col gap-2 text-lg">
            <div className="sm:text-lg lg:text-md text-sm">
              <h3 className="tracking-tighter lg:text-xl sm:text-lg text-md text-white">PERSONALITY</h3>
              <p>
              I'm a focused and methodical developer who thrives on planning, tackling challenges with a clear structure, and bringing ideas to life with precision and creativity.
              </p>
            </div>
            <div className="sm:text-lg lg:text-md text-sm">
              <h3 className="tracking-tighter lg:text-xl sm:text-lg text-md text-white">APPROACH</h3>
              <p className="sm:text-lg lg:text-md text-sm">
              I start by turning on my lofi playlist, planning the tech stack, structuring the app, designing the front end, building the back end, and deploying it to production.
              </p>
            </div>
            <div className="sm:text-lg lg:text-md text-sm">
              <h3 className="tracking-tighter lg:text-xl sm:text-lg text-md text-white">DESIGN</h3>
              <p>
              I have a keen eye for design, focusing on creating unique, creative, and user-friendly interfaces that are both visually appealing and functional.
              </p>
            </div>
            <div className="sm:text-lg lg:text-md text-sm">
              <h3 className="tracking-tighter lg:text-xl sm:text-lg text-md text-white">FOCUS</h3>
              <p>
              I have the ability to focus intensely on coding for hours without a break, immersing myself in the problem-solving process and consistently delivering high-quality results.
              </p>
            </div>
          </div>
          <div className="lg:mt-24 :mt-12 text-white leading-none flex justify-between items-center">
            <div>
              <div className="lg:text-3xl sm:text-md sm:mt-8 text-lg tracking-[0.6px] font-[helvetica]  uppercase">
                sounds good?
              </div>
              <h3 className="sm:text-sm">let{`'`}s own the code togather.</h3>
            </div>
            <div>
              <a
                href="mailto:moidmalikdev@gmail.com"
                className="lg:text-2xl sm:text-md text-md w-full sm:mt-12  tracking-normal uppercase flex items-center lg:gap-1"
              >
                email me
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 17L17 7M17 7H8M17 7V16"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default Page6;
  