import type { NextPage } from 'next';
import { CommitStreak } from '../components/CommitStreak';
import { Header } from '../components/Header';
import { Layout } from '../components/Layout';
import { TodoList } from '../components/TodoList';
import { blogTodo } from '../data/blogCreationTodo';
import { thingsToTry } from '../data/thingsToTryList';
import { todoList } from '../data/todoList';
import { trpc } from '../utils/trpc';

const Home: NextPage = () => {
  // const { data, isLoading } = trpc.useQuery(['blogPost.posts']);
  return (
    <Layout>
      <Header />
      <CommitStreak />
      <div className='flex flex-col space-y-4'>
        {/* <>
          Data: {JSON.stringify(data)}, isLoading: {isLoading}
        </> */}
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
