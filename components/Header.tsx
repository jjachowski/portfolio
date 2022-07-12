import Image from 'next/future/image';
import React from 'react';
import { GithubLink } from './GithubLink';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <div className=' flex flex-row items-center my-4'>
      <Image
        src={'/myself.jpg'}
        className='w-28 rounded-full shadow-2xl mr-4 b border-solid border-4 border-pink-900'
        alt='Picture of a really swell guy, author of this website, magnificent beard and slick hairstyle'
      />
      <div>
        <h1 className='text-xl sm:text-2xl  font-bold mb-1'>
          {`Hi, I'm Jakub and this is my portfolio website`}
        </h1>
        <GithubLink />
      </div>
    </div>
  );
};
