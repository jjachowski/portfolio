import React, { ReactNode } from 'react';

export type ButtonType = 'default' | 'accent' | 'danger' | 'submit';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button';
  style?: ButtonType;
  animated?: boolean;
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  animated,
  style = 'default',
  className,
  onClick,
  type,
}) => {
  const colors = () => {
    switch (style) {
      case 'submit':
        return 'bg-green-300 dark:bg-green-600 hover:bg-green-400 hover:dark:bg-green-500';
      case 'accent':
        return 'bg-fuchsia-300 dark:bg-fuchsia-700 hover:bg-fuchsia-400 hover:dark:bg-fuchsia-500';
      case 'danger':
        return 'bg-red-400 text-red-900 dark:text-red-100  dark:bg-red-700 hover:bg-red-500';
      default:
        return 'bg-blue-300 dark:bg-blue-700 hover:bg-blue-400 hover:dark:bg-blue-500';
    }
  };
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-2 shadow-md font-semibold ${colors()}  rounded-lg ${
        animated
          ? 'transition ease-in-out delay-150 hover:scale-110  duration-300'
          : ''
      } ${className}`}
    >
      {children}
    </button>
  );
};
