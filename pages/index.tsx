import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className='flex justify-center'>
      <h1 className='text-3xl font-bold p-8 bg-purple-300 rounded-2xl shadow-2xl'>
        {`hello, I'm Jakub and this will be my portfolio!`}
      </h1>
    </div>
  );
};

export default Home;
