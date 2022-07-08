import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  title?: string | ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, title, className }) => {
  return (
    <div
      className={`rounded-2xl bg-indigo-300  p-6 flex flex-col shadow-xl ${className}`}
    >
      {title && (
        <div className='mb-6 bg-indigo-500 w-fit px-12 py-2 rounded-md shadow-lg'>
          {typeof title === 'string' ? (
            <h2 className='text-2xl font-extrabold text-indigo-50'>{title}</h2>
          ) : (
            title
          )}
        </div>
      )}

      {children}
    </div>
  );
};
