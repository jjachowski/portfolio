import React, { ReactNode } from 'react';

interface StackProps {
  children: ReactNode | ReactNode[];
  spacing?: number | string;
}

export const Stack: React.FC<StackProps> = ({ children, spacing = 10 }) => {
  return (
    <div className={'flex flex-col space-y-' + spacing.toString()}>
      {children}
    </div>
  );
};
