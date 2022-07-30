import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';
import { BackToHomepage } from './BackToHomepage';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { asPath } = useRouter();
  return (
    <div className='w-screen flex justify-center '>
      {asPath !== '/' && <BackToHomepage />}
      <div className='flex flex-col w-full px-3 sm:w-3/4 lg:w-3/5 max-w-5xl'>
        {children}
      </div>
    </div>
  );
};
