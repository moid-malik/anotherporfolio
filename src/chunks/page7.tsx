import Reactsvg from "../../public/reactsvg";

const Page7 = () => {
  return (
    <div id="contact" className="h-screen w-full p-4">
      <div className="h-full page7 w-full bg-black rounded-[50px] px-20 py-8">
        <div className="flex justify-between">
          <div className="font-[font5] text-white text-[12rem] leading-[15rem]">
            <h1>
              GOT <span className="text-gray-500">AN</span>
            </h1>
            <h1 className="text-[17rem] leading-[9rem] tracking-[0.9rem]">
              IDEA?
            </h1>
          </div>
          <div className="relative h-full w-full">
            <div className="absolute top-[50px] left-[55%] animate-spin">
              <Reactsvg />
            </div>
            <div></div>
          </div>
        </div>
        <div className="text-white mt-24 flex justify-between items-end">
         <div className="flex flex-col text-sm">
          <h3 className="font-[font6] uppercase tracking-tighter text-xl">contact now!</h3>
            <a href="mailto:moidmalikdev@gmail.com">moidmalikdev@gmail.com</a>
            <a href="https://wa.me/+92-312-6968917">+92-312-6968917</a>
          </div>
           <div className="flex flex-col items-end">
            <p className="text-sm tracking-[-1px] font-thin">
              IT IS NOT JUST ABOUT SOLVING THE PROBLEM BUT
            </p>
            <span className="font-semibold tracking-tight text-lg leading-none">
              OFFERING THE TRANSFORMATION!
          <p className="text-white tracking-[-1px] w-full flex justify-end font-thin text-sm">© Moid Malik</p>
            </span>
          </div>
        </div>
        
      </div>
    </div>
  );
};
export default Page7;
