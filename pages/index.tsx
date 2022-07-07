import type { NextPage } from 'next';
import { Card } from '../components/Card';
import { TodoList } from '../components/TodoList';

// background-color: #;
// opacity: 0.8;
// background-image:  radial-gradient(#444cf7 0.5px, transparent 0.5px), radial-gradient(#444cf7 0.5px, #e5e5f7 0.5px);
// background-size: 20px 20px;
// background-position: 0 0,10px 10px;
// background-color: #e5e5f7;
// opacity: 1;
// background-image: radial-gradient(#b88ef2 2px, #e5e5f7 2px);
// background-size: 40px 40px;
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
