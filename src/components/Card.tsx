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
      className={`rounded-2xl px-6 py-4 sm:px-12 sm:py-8  border-solid  flex flex-col shadow-xl border-4 dark:text-gray-300 ${
        isSpecial
          ? ' shadow-2xl border-pink-300 dark:border-pink-500 bg-pink-100 dark:bg-pink-900 '
          : ' border-indigo-600 dark:bg-indigo-900'
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
