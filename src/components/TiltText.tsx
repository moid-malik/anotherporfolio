import React from 'react'

const TiltText = React.forwardRef<HTMLDivElement, React.PropsWithChildren<{}>>((props, ref) => {

  return (
    <div ref={ref} id="tilttext"><h1 className="lg:text-6xl sm:text-5xl text-5xl font-[font4] ">i am a  full stack</h1>
        <h1 className="lg:text-9xl text-8xl sm:text-8xl font-[font5]">develop<span className='lg:text-white sm:text-zinc-700 text-zinc-700'>er</span></h1>
        <h1 className="lg:text-6xl sm:text-4xl text-6xl tracking-tighter font-[font4]">to<span className='lg:text-white sm:text-zinc-700 text-zinc-700'>hire</span></h1></div>
  )
})

export default TiltText