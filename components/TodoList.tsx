import React from 'react';
import { Card } from './Card';
import { List, ListItem } from './List';
interface TodoListProps {
  title: string;
  items: ListItem[];
}

export const TodoList: React.FC<TodoListProps> = ({ title, items }) => {
  return (
    <Card title={title}>
      {/* <ul className='list-disc text-lg pl-4'>
        <li>
          <s>tailwind</s>
        </li>
        <li>make this page not look like trash</li>
        <li>zod - object validation with cool typescript features</li>
        <li>next.js backend</li>
        <li>react query</li>
        <li>tRCP - typesafe api</li>
        <li>znaleźć sposób na przechowywanie treści 😬</li>
      </ul> */}

      <List items={items} className='text-xl' />
    </Card>
  );
};
