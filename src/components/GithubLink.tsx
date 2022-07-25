import React from 'react';
import Image from 'next/future/image';

interface GithubLinkProps {
  className?: string;
}

export const GithubLink: React.FC<GithubLinkProps> = ({ className }) => {
  const onClick = () => {
    window.open('https://github.com/jjachowski/portfolio', '_blank')?.focus();
  };
  return (
    <div
      onClick={onClick}
      className={`flex flex-row items-end cursor-pointer hover:underline font-mono text-xs ${className}`}
    >
      Check out my
      <Image
        className='h-4 ml-1 bg-white rounded-full'
        src='/GitHub_Logo.png'
        alt='github icon'
      />
    </div>
  );
};
