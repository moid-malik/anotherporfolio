const Page6 = () => {
    return (
      <div className="h-screen w-full p-4 mt-12">
        <div className="relative w-full h-full flex flex-col bg-black rounded-[50px] px-6 py-20">
          <video
            autoPlay
            muted
            loop
            className="h-[30vw] absolute top-[43%] left-[77%] -translate-x-[50%] -translate-y-[50%]"
            src="/timer.mp4"
          />
          <div className="z-[10] w-[52vw] text-zinc-400 leading-none flex flex-col gap-2 text-lg">
            <div className="">
              <h3 className="tracking-tighter text-xl text-white">PERSONALITY</h3>
              <p>
              I'm a focused and methodical developer who thrives on planning, tackling challenges with a clear structure, and bringing ideas to life with precision and creativity.
              </p>
            </div>
            <div className="">
              <h3 className="tracking-tighter text-xl text-white">APPROACH</h3>
              <p>
              I start by turning on my lofi playlist, planning the tech stack, structuring the app, designing the front end, building the back end, and deploying it to production.
              </p>
            </div>
            <div className="">
              <h3 className="tracking-tighter text-xl text-white">DESIGN</h3>
              <p>
              I have a keen eye for design, focusing on creating unique, creative, and user-friendly interfaces that are both visually appealing and functional.
              </p>
            </div>
            <div className="">
              <h3 className="tracking-tighter text-xl text-white">FOCUS</h3>
              <p>
              I have the ability to focus intensely on coding for hours without a break, immersing myself in the problem-solving process and consistently delivering high-quality results.
              </p>
            </div>
          </div>
          <div className="mt-24 text-white leading-none flex justify-between items-center">
            <div>
              <div className="text-3xl tracking-[0.6px] font-[helvetica]  uppercase">
                sounds good?
              </div>
              <h3>let{`'`}s own the code togather.</h3>
            </div>
            <div>
              <a
                href="mailto:moidmalikdev@gmail.com"
                className="text-2xl tracking-normal uppercase flex items-center gap-1"
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
  