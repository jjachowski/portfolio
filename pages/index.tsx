import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className='flex justify-center flex-col p-4'>
      <h1 className='text-3xl font-bold p-8 '>
        {`hello, I'm Jakub and this will be my portfolio!`}
      </h1>
      <div className='mt-8 bg-green-300 p-8 rounded-2xl shadow-2xl'>
        <h2 className='text-2xl font-bold list-disc'>
          list of cool things I want to try/add:
        </h2>
        <ul className='mt-4 list-disc text-lg'>
          <li>
            <s>tailwind</s>
          </li>
          <li>make this page not look like trash</li>
          <li>zod - object validation with cool typescript features</li>
          <li>next.js backend</li>
          <li>react query</li>
          <li>tRCP - typesafe api</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
