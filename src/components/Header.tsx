import Image from "next/future/image";
import React from "react";
import { GithubLink } from "./GithubLink";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <div className=" flex flex-row items-center my-4">
      <Image
        src={"/myself.jpeg"}
        className="w-28 rounded-3xl shadow-2xl mr-4 b border-solid border-4 border-black"
        alt="Picture of a really swell guy, author of this website, magnificent beard and slick hairstyle, driving honda civic, wearing sunglasses and baseball cap"
      />
      <div>
        <h1 className="text-xl sm:text-2xl  font-bold mb-1">
          {`Hi, my name is Jakub and this is my website`}
        </h1>
        <GithubLink />
      </div>
    </div>
  );
};
