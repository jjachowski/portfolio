import React from 'react';
import { Link } from './Link';
import { BiHomeHeart } from 'react-icons/bi';
type BackToHomepageProps = {};

export const BackToHomepage: React.FC<BackToHomepageProps> = () => {
  return (
    <div className='fixed bottom-2 right-2 sm:bottom-4 sm:right-4 z-10 rounded-full p-2 shadow-lg bg-white dark:bg-zinc-800 bg-opacity-70'>
      <Link href='/'>
        <div className='flex flex-row'>
          <BiHomeHeart />
          <p className='text-sm ml-2'>homepage</p>
        </div>
      </Link>
    </div>
  );
};
