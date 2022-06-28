import React from 'react';

interface TodoListProps {}

export const TodoList: React.FC<TodoListProps> = ({}) => {
  return (
    <div className='mt-8 bg-green-300 p-8 rounded-2xl shadow-2xl'>
      <h2 className='text-2xl font-bold list-disc'>
        list of cool things I want to try/add:
      </h2>
      <ul className='mt-4 list-disc text-lg'>
        <li>
          <s>tailwind</s>
        </li>
        <li>make this page not look like trash</li>
        <li>zod - object validation with cool typescript features</li>
        <li>next.js backend</li>
        <li>react query</li>
        <li>tRCP - typesafe api</li>
      </ul>
    </div>
  );
};
