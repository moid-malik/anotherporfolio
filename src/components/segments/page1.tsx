import TiltText from "@/components/TiltText";
import { useRef, useState, useEffect } from "react";
import Page1bottom from "@/components/Page1bottom";

const gsapPromise = import("gsap").then((module) => module.default);

const Page1 = () => {
  const tiltTextRef = useRef<any>(null);
  const [xVal, setXVal] = useState(0);
  const [yVal, setYVal] = useState(0);

  const mouseMoveHandle = (e: any) => {
    setXVal(
      (e.clientX -
        tiltTextRef.current.getBoundingClientRect().x -
        tiltTextRef.current.getBoundingClientRect().width) /
        12
    );
    setYVal(
      -(
        e.clientY -
        tiltTextRef.current.getBoundingClientRect().y -
        tiltTextRef.current.getBoundingClientRect().height
      ) / 5
    );
  };

  useEffect(() => {
    gsapPromise.then((gsap) => {
      gsap.to(tiltTextRef.current, {
        transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
        duration: 2,
      });
    });
  }, [xVal, yVal]);
  return (
    <div className="lg:relative lg:h-[45vw] sm:h-screen h-screen text-white bg-white lg:p-4 sm:py-4 py-4 sm:px-4 px-4">
      <div className="page1 relative lg:h-full sm:h-full h-full lg:w-full sm:w-full w-full rounded-[35px]">
        <div className="absolute  lg:top-[5%] sm:top-[5%] top-[5%] sm:left-[5%] left-[5%] lg:left-[3%]">
          <h1 className=" text-white lg:text-6xl sm:text-4xl text-4xl  tracking-tighter font-semibold">
            Moid
          </h1>
          <div className="lg:w-[9.4vw] lg:my-1 lg:ml-1 h-[1px] bg-white "></div>
        </div>
        <div className="flex lg:justify-between lg:items-center lg:h-full  lg:px-12">
          <div
            onMouseMove={(e) => {
              mouseMoveHandle(e);
            }}
            id="page1-child"
            className="uppercase lg:text-white  flex lg:ml-8 h-full items-center w-full normal sm:pl-12 pl-4 z-[3] lg:pt-0 sm:pt-[-12px]
            pt-[42vw]"
          >
            <TiltText ref={tiltTextRef} />
          </div>
          <div className="sm:absolute absolute lg:static sm:top-[20%] top-[38%] sm:left-[5%] left-[25%] lg:z-[1] sm:z-[-1] z-[1] sigmavideo">
            <video
              autoPlay
              muted
              loop
              className="lg:h-[28vw] lg:mr-16"
              src="/sigma.webm"
            />
          </div>
          <Page1bottom />
        </div>
      </div>
    </div>
  );
};
export default Page1;
