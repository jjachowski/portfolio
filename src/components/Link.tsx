import React, { ReactNode } from 'react';
import NextLink from 'next/link';

type LinkProps = {
  href: string;
  children: ReactNode;
};

export const Link: React.FC<LinkProps> = ({ href, children }) => (
  <NextLink href={href}>
    <a className='text-pink-400 text-xl font-semibold hover:underline hover:text-pink-600 hover:font-bold hover:cursor-pointer'>
      {children}
    </a>
  </NextLink>
);
