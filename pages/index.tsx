import type { NextPage } from 'next';
import { TodoList } from '../components/TodoList';
import { thingsToTry } from '../data/thingsToTryList';
import { todoList } from '../data/todoList';
import { Layout } from '../components/Layout';
import { useEffect, useState } from 'react';
import { getCommitStreak } from '../api/getCommits';
import { GithubLink } from '../components/GithubLink';
import { Header } from '../components/Header';
import { CommitStreak } from '../components/CommitStreak';

const Home: NextPage = () => {
  return (
    <Layout>
      <Header />
      <CommitStreak />
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
