import { Console } from 'console';
import React from 'react';
import { Code } from '../components/Code';
import { Layout } from '../components/Layout';
import { snippets } from '../data/mySnippets';

type SnippetsProps = {};

const Snippets: React.FC<SnippetsProps> = () => {
  return (
    <Layout>
      <div className='px-8 my-4 md:my-10'>
        <h1 className='text-xl md:text-3xl font-semibold '>
          These are vscode snippets that I currently use, feel free to copy
          paste 😄
        </h1>
        <h3 className='text-gray-500'>{`vscode -> cmd/ctrl + P -> configure user snippets`}</h3>
      </div>

      <Code>{snippets}</Code>
    </Layout>
  );
};

export default Snippets;
