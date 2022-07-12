import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  title?: string | ReactNode;
  className?: string;
  isSpecial?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  title,
  className,
  isSpecial,
}) => {
  return (
    <div
      className={`rounded-2xl px-6 py-4 sm:px-12 sm:py-8 bg-indigo-100 border-solid  flex flex-col shadow-xl ${
        isSpecial
          ? ' border-4 border-pink-300 bg-pink-100 shadow-2xl'
          : 'border-4 border-indigo-200'
      } ${className}`}
    >
      {title && (
        <div className='w-fit rounded-2xl shadow-ms mb-4'>
          {typeof title === 'string' ? (
            <h2 className='text-4xl font-semibold'>{title}</h2>
          ) : (
            title
          )}
        </div>
      )}

      {children}
    </div>
  );
};
