import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  title?: string | ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, title, className }) => {
  return (
    <div
      className={`rounded-2xl bg-indigo-300  p-8 flex flex-col shadow-xl ${className}`}
    >
      {title && (
        <div className='mb-2'>
          {typeof title === 'string' ? (
            <h2 className='text-2xl font-extrabold'>{title}</h2>
          ) : (
            title
          )}
        </div>
      )}

      {children}
    </div>
  );
};
