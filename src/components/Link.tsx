import React from 'react';
import NextLink from 'next/link';

type LinkProps = {
  href: string;
  text: string;
};

export const Link: React.FC<LinkProps> = ({ href, text }) => (
  <NextLink href={href}>
    <a className='text-pink-400 text-xl font-semibold hover:underline hover:text-pink-600 hover:font-bold hover:cursor-pointer'>
      {text}
    </a>
  </NextLink>
);
