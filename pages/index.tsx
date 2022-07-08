import type { NextPage } from 'next';
import { Stack } from '../components/Stack';
import { TodoList } from '../components/TodoList';
import { thingsToTry } from '../data/thingsToTryList';
import { todoList } from '../data/todoList';

const Home: NextPage = () => {
  return (
    <div className='flex justify-center flex-col p-4'>
      <h1 className='text-3xl font-bold p-8 '>
        {`hello, I'm Jakub and this will be my portfolio!`}
      </h1>
      <Stack spacing={4}>
        <TodoList
          items={thingsToTry}
          title='list of cool things I wanna try!'
        />
        <TodoList items={todoList} title='todo list on this page' />
      </Stack>
    </div>
  );
};

export default Home;
