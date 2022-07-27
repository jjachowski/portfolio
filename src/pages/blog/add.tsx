import React, { useState } from 'react';
import { Layout } from '../../components/Layout';
import { todoList } from '../../data/todoList';

type AddProps = {};

const Add: React.FC<AddProps> = () => {
  const [value, setValue] = useState(JSON.stringify(todoList, null, '\t'));
  return (
    <Layout>
      <h1 className='text-3xl my-10'>here I test text area component</h1>
      <div className='h-80 border-teal-500 border-4 rounded-xl shadow-2xl overflow-hidden '>
        <textarea value={value} className='h-full w-full p-2 bg-teal-100' />
      </div>
    </Layout>
  );
};

export default Add;
