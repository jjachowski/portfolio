import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  title?: string | ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, title, className }) => {
  return (
    <div
      className={`rounded-2xl bg-indigo-200  p-4 flex flex-col shadow-xl ${className}`}
    >
      {title && (
        <div className='mb-6 bg-indigo-400 w-fit px-12 py-2  rounded-2xl shadow-ms'>
          {typeof title === 'string' ? (
            <h2 className='text-2xl font-extrabold text-white'>{title}</h2>
          ) : (
            title
          )}
        </div>
      )}

      {children}
    </div>
  );
};
