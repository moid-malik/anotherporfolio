import { RefObject } from "react";

type TiltTextProps = {
  ref: RefObject<HTMLDivElement>;
};

const TiltText = ({ ref }: TiltTextProps) => {
  return (
    <div ref={ref} id="tilttext">
      <h1 className="text-6xl font-[font4]">i am a full stack</h1>
      <h1 className="text-9xl font-[font5]">developer</h1>
      <h1 className="text-6xl font-[font4]">to hire</h1>
    </div>
  );
};

export default TiltText;
