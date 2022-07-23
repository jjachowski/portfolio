import type { NextPage } from 'next';
import { Code } from '../components/Code';
import { CommitStreak } from '../components/CommitStreak';
import { Header } from '../components/Header';
import { Layout } from '../components/Layout';
import { TodoList } from '../components/TodoList';
import { blogTodo } from '../data/blogCreationTodo';
import { thingsToTry } from '../data/thingsToTryList';
import { todoList } from '../data/todoList';
import { codeSample } from '../data/codeSampleText';
import { useSession } from 'next-auth/react';

const Home: NextPage = () => {
  const { data, status } = useSession()
  return (
    <Layout>
      <div className='absolute right-2 top-2 bg-purple-300 rounded-md px-2 w-50 overflow-hidden whitespace-nowrap transition-all duration-1000 w-10 hover:w-60'>logged in as: {data?.user?.email}</div>
      <div>
      </div>
      <Header />
      <CommitStreak />
      <div className='flex flex-col space-y-4'>
        <div className='bg-blue-400 h-40'>
          {JSON.stringify(data)}
        </div>
        <div className='bg-purple-400 h-40'>
          {JSON.stringify(status)}
        </div>
        <Code>{codeSample}</Code>
        <TodoList
          items={blogTodo}
          title='next cool feature - blog posts'
          superCool
        />
        <TodoList
          items={thingsToTry}
          title='list of cool things I wanna try!'
        />
        <TodoList items={todoList} title='todo list on this page' />
      </div>
    </Layout>
  );
};

export default Home;
