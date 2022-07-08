import type { NextPage } from 'next';
import { TodoList } from '../components/TodoList';
import { thingsToTry } from '../data/thingsToTryList';
import { todoList } from '../data/todoList';
import { Layout } from '../components/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <h1 className='text-3xl font-bold p-8 '>
        {`hello, I'm Jakub and this will be my portfolio!`}
      </h1>
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
