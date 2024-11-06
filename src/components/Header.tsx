const Header = () => {
  return (
    <div className="w-full text-white items-center leading-none flex justify-between px-12 pt-10 fixed z-[100] right-0 top-0 ">
      <div>
        <h1 className=" text-white text-6xl tracking-tighter ">
          Moid
        </h1>
        <div className="w-[9vw] my-1 ml-1 h-[1px] bg-white "></div>
        <span className="subheading ml-1 text-sm tracking-wide font-thin">
          A Full-stack Developer
        </span>
      </div>
      
        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-3xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Hire Me
        </button>
      
    </div>
  );
};

export default Header;
