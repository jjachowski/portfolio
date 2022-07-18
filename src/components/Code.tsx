import React from 'react';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { synthwave84 } from 'react-syntax-highlighter/dist/cjs/styles/prism';

type CodeProps = {
  children: string;
};

export const Code: React.FC<CodeProps> = ({ children }) => {
  return (
    <div className='rounded-lg overflow-hidden'>
      <SyntaxHighlighter
        style={synthwave84}
        language={'tsx'}
        customStyle={{ marginTop: 0, marginBottom: 0 }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
};
