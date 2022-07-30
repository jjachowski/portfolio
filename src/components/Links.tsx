import React from 'react';
import { Link } from './Link';

type LinksProps = {};

export const Links: React.FC<LinksProps> = () => {
  return (
    <div className='my-4 flex flex-col space-y-1'>
      <Link href='/snippets'>snippets I use</Link>
      <Link href='/blog/add'>work in progress</Link>
    </div>
  );
};
