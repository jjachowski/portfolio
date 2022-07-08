import React from 'react';

export type ListItem = {
  text: string;
  done?: boolean;
};

const coolEmojis = ['😎', '🚀', '🤠', '🔥', '🥳'];

interface ListProps {
  items: ListItem[];
  className?: string;
  superCool?: boolean;
}

export const List: React.FC<ListProps> = ({ className, items, superCool }) => {
  return (
    <ul className={`list-disc pl-4 ${className} flex flex-col space-y-2`}>
      {items.map((x) => (
        <li key={x.text}>
          {x.done ? <s>{x.text}</s> : x.text}
          {superCool && x.done && (
            <b>{' - done! ' + coolEmojis[x.text.length % coolEmojis.length]}</b>
          )}
        </li>
      ))}
    </ul>
  );
};
