import React, { useState } from 'react';
import { Button } from '../../components/Button';
import { Layout } from '../../components/Layout';
import { todoList } from '../../data/todoList';

type AddProps = {};

const Add: React.FC<AddProps> = () => {
  const [value, setValue] = useState(JSON.stringify(todoList, null, '\t'));
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };
  const save = () => {};
  return (
    <Layout>
      <h1 className='text-3xl my-10'>here I test text area component</h1>
      <div className='h-80 border-teal-500 border-4 rounded-xl shadow-2xl overflow-hidden '>
        <textarea
          onChange={(e) => handleChange(e)}
          value={value}
          className='h-full w-full p-2 bg-teal-100 dark:bg-teal-900'
        />
      </div>
      <div className='flex flex-row justify-end'>
        <Button animated>default</Button>
        <Button animated type='danger'>
          danger
        </Button>
        <Button animated type='accent'>
          accent
        </Button>
      </div>
    </Layout>
  );
};

export default Add;
