"use client";
import Page1 from "@/components/segments/page1";
import Page2 from "@/components/segments/page2";
import Page3 from "@/components/segments/page3";
import Page4 from "@/components/segments/page4";
import Page5 from "@/components/segments/page5";
import Page6 from "@/components/segments/page6";
import Page7 from "@/components/segments/page7";


export default function Home() {
  
  return (
    <main className="font-[font6] ">
      <div className="main relative">
      <Page1/>
      <Page2/>
      <Page3/>
      <Page4/>
      <Page5/>
      <Page6/>
      <Page7/>
      </div>
    </main>
  );
}
