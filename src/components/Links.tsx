import React from 'react';
import { Link } from './Link';

type LinksProps = {};

export const Links: React.FC<LinksProps> = () => {
  return (
    <div className='my-4 flex flex-col space-y-1'>
      <Link href='/snippets' text='snippets I use' />
      <Link href='/blog/add' text='work in progress' />
    </div>
  );
};
