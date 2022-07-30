import React, { ReactNode } from 'react';

type TitleProps = {
  children: ReactNode;
  className?: string;
};

export const Title: React.FC<TitleProps> = ({ children, className }) => {
  return <h1 className={`text-3xl font-bold ${className}`}>{children}</h1>;
};
