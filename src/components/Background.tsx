import React from "react";
import Image from "next/image";
import people from "@/images/people.avif";

interface Props {
  children?: React.ReactNode;
}

const Background: React.FC<Props> = ({ children }) => (
  <div className="relative h-screen w-full">
    <Image
      src={people}
      layout="fill"
      objectFit="cover"
      quality={100}
      alt="people"
    />
    <div className="absolute top-0 left-0 h-screen w-full bg-black bg-opacity-50 flex flex-col justify-end">
      {children}
    </div>
  </div>
);

export default Background;
