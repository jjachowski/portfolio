import type { NextPage } from 'next';
import { TodoList } from '../components/TodoList';
import { thingsToTry } from '../data/thingsToTryList';
import { todoList } from '../data/todoList';
import { Layout } from '../components/Layout';
import { useEffect, useState } from 'react';
import { getCommitStreak } from '../api/getCommits';

const Home: NextPage = () => {
  const [streak, setStreak] = useState<number>();
  useEffect(() => {
    const test = async () => {
      const res = await getCommitStreak();
      setStreak(res);
    };
    test();
  }, []);
  return (
    <Layout>
      <h1 className='text-3xl font-bold p-8 '>
        {`hello, I'm Jakub and this will be my portfolio!`}
      </h1>
      {streak && (
        <h2 className='text-2xl font-bold p-4 '>
          daily-commits streak: {streak}
        </h2>
      )}

      <div className='flex flex-col space-y-4'>
        <TodoList
          items={thingsToTry}
          title='list of cool things I wanna try!'
          superCool
        />
        <TodoList items={todoList} title='todo list on this page' />
      </div>
    </Layout>
  );
};

export default Home;
