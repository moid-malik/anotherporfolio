import React from 'react'

const TiltText = React.forwardRef<HTMLDivElement, React.PropsWithChildren<{}>>((props, ref) => {

  return (
    <div ref={ref} id="tilttext"><h1 className="text-6xl font-[font4] ">i am a  full stack</h1>
        <h1 className="text-9xl font-[font5]">developer</h1>
        <h1 className="text-6xl font-[font4]">to hire</h1></div>
  )
})

export default TiltText