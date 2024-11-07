import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'
import {
  IconAtom,
  IconBrandPython,
  IconCode,
  IconComponents,
  IconDatabase,
  IconLinkPlus,
  IconPalette,
  IconWorld,
} from "@tabler/icons-react";

 function Page5() {
  return (
    <div className=" w-full">
    <BentoGrid className="max-w-4xl mx-auto ">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i == 5 ? "row-span-2":'' }
        />
      ))}
    </BentoGrid>
          </div>
  );
}
const items = [
  {
    title: "MongoDB",
    description: "A NoSQL database known for scalability and flexibility.",
    header:<img src="https://images.unsplash.com/photo-1667372283587-e1557c08aca4?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Mongoose" className="rounded-lg" />,
    icon: <IconDatabase className="h-4 w-4 text-green-600" />,
  },
  {
    title: "Mongoose",
    description: "An elegant MongoDB object modeling library for Node.js.",
    header: <img src="https://images.unsplash.com/photo-1639322537138-5e513100b36e?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Mongoose" className="rounded-lg" />,
    icon: <IconLinkPlus className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "TypeScript",
    description: "A typed superset of JavaScript that adds static types.",
    header: <img src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="TypeScript" className="rounded-lg h-36" />,
    icon: <IconCode className="h-4 w-4 text-blue-600" />,
  },
  {
    title: "Next.js",
    description: "A React framework for server-side rendering and static site generation.",
    header: <img src="https://images.unsplash.com/photo-1585076641399-5c06d1b3365f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Next.js" className="rounded-lg h-36" />,
    icon: <IconWorld className="h-4 w-4 text-black" />,
  },
  {
    title: "React.js",
    description: "A JavaScript library for building user interfaces.",
    header: <img src="https://images.unsplash.com/photo-1656709518577-170f523bae9a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="React.js" className="rounded-lg" />,
    icon: <IconAtom className="h-4 w-4 text-blue-500" />,
  },
  {
    title: "Aeternity UI",
    description: "A UI component library tailored for Aeternity blockchain.",
    header: <img src="https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Aeternity UI" className="rounded-lg" />,
    icon: <IconComponents className="h-4 w-4 text-purple-500" />,
  },
  {
    title: "Tailwind CSS",
    description: "A utility-first CSS framework for rapid UI development.",
    header: <img src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Tailwind CSS" className="rounded-lg h-36" />,
    icon: <IconPalette className="h-4 w-4 text-teal-500" />,
  },
  
  {
    title: "Python",
    description: "A versatile, high-level programming language for web, data science, and more.",
    header: <img src="https://images.unsplash.com/photo-1656680715953-75d4bbcbb839?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Python" className="rounded-lg h-36" />,
    icon: <IconBrandPython className="h-4 w-4 text-yellow-600" />,
  },
];

export default Page5