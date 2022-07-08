import React from 'react';

export type ListItem = {
  text: string;
  done?: boolean;
};

interface ListProps {
  items: ListItem[];
  className?: string;
}

export const List: React.FC<ListProps> = ({ className, items }) => {
  return (
    <ul className={`list-disc pl-4 ${className}`}>
      {items.map((x) => (
        <li key={x.text}>{x.done ? <s>{x.text}</s> : x.text}</li>
      ))}
    </ul>
  );
};
