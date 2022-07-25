import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='w-screen flex justify-center '>
      <div className='flex flex-col w-full px-3 sm:w-3/4 lg:w-3/5 max-w-5xl'>
        {children}
      </div>
    </div>
  );
};
