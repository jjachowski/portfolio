import React from 'react';
import { Card } from './Card';

interface TodoListProps {}

export const TodoList: React.FC<TodoListProps> = ({}) => {
  return (
    <Card title='list of cool things I want to try/add:'>
      <ul className='list-disc text-lg pl-4'>
        <li>
          <s>tailwind</s>
        </li>
        <li>make this page not look like trash</li>
        <li>zod - object validation with cool typescript features</li>
        <li>next.js backend</li>
        <li>react query</li>
        <li>tRCP - typesafe api</li>
      </ul>
    </Card>
  );
};
