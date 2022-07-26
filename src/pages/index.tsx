import type { NextPage } from 'next';
import { Code } from '../components/Code';
import { CommitStreak } from '../components/CommitStreak';
import { Header } from '../components/Header';
import { Layout } from '../components/Layout';
import { Links } from '../components/Links';
import { Login } from '../components/Login';
import { TodoList } from '../components/TodoList';
import { blogTodo } from '../data/blogCreationTodo';
import { thingsToTry } from '../data/thingsToTryList';
import { todoList } from '../data/todoList';

const Home: NextPage = () => {
  return (
    <Layout>
      <Login />
      <Header />
      <CommitStreak />
      <Links />
      <div className='flex flex-col space-y-4'>
        <TodoList items={blogTodo} title='current *big* feature' superCool />
        <TodoList items={thingsToTry} title='cool things to try' />
        <TodoList items={todoList} title='todo for this page' />
      </div>
    </Layout>
  );
};

export default Home;
