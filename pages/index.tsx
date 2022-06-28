import type { NextPage } from 'next';
import { TodoList } from '../components/TodoList';

const Home: NextPage = () => {
  return (
    <div className='flex justify-center flex-col p-4'>
      <h1 className='text-3xl font-bold p-8 '>
        {`hello, I'm Jakub and this will be my portfolio!`}
      </h1>
      <TodoList />
    </div>
  );
};

export default Home;
