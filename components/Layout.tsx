import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='w-screen flex justify-center'>
      <div className='w-full sm:w-3/4 lg:w-2/3 max-w-5xl'>{children}</div>
    </div>
  );
};
