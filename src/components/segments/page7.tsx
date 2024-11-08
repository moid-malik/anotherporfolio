import Reactsvg from "../../../public/reactsvg";

const Page7 = () => {
  return (
    <div id="contact" className="h-screen w-full p-4">
      <div className="h-full page7 w-full bg-black rounded-[50px] lg:px-20 lg:py-8 sm:px-4 px-4">
        <div className="flex justify-between">
          <div className="font-[font5] text-white lg:text-[12rem] sm:text-[8rem] text-[8rem] lg:leading-[15rem] sm:leading-[2rem] leading-[9rem] lg:mt-0 mt-14">
            <h1>
              GOT <span className="text-gray-500">AN</span>
            </h1>
            <h1 className="lg:text-[17rem] text-[12rem] lg:leading-[9rem] sm:leading-[6rem] leading-[6rem] tracking-[0.9rem]">
              IDEA?
            </h1>
          </div>
          <div className="relative h-full w-full">
            <div className="lg:static sm:hidden hidden absolute top-[50px] left-[55%] animate-spin">
              <Reactsvg />
            </div>
            <div></div>
          </div>
        </div>
        <div className="text-white lg:mt-18 sm:mt-44 mt-44 flex lg:flex-row sm:flex-col flex-col lg:justify-between lg:items-end lg:text-start sm:text-center text-center">
  <div className="flex flex-col text-sm">
    <h3 className="font-[font6] uppercase tracking-tighter text-xl">contact now!</h3>
    <a href="mailto:moidmalikdev@gmail.com">moidmalikdev@gmail.com</a>
    <a href="https://wa.me/+92-312-6968917">+92-312-6968917</a>
  </div>
  <div className="my-2 w-90% bg-white h-[1px]"></div>
  <div className="flex flex-col lg:items-end text-center">
    <p className="text-sm tracking-[-1px] font-thin text-center">
      IT IS NOT JUST ABOUT SOLVING THE PROBLEM BUT
      OFFERING THE TRANSFORMATION!
    </p>
    <span className="font-semibold tracking-tight lg:text-lg leading-none">
      <p className="text-white tracking-[-1px] w-full font-thin text-sm mx-auto">© Moid Malik</p>
    </span>
  </div>
</div>

        
      </div>
    </div>
  );
};
export default Page7;
