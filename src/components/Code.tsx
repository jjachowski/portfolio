import React from 'react';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';

type CodeProps = {
  children: string;
};

export const Code: React.FC<CodeProps> = ({ children }) => {
  return (
    <div className='rounded-lg overflow-hidden'>
      <SyntaxHighlighter
        style={tomorrow}
        language={'tsx'}
        customStyle={{ marginTop: 0, marginBottom: 0, borderRadius: 10 }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
};
