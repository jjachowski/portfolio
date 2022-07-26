import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { AiOutlineCopy, AiOutlineCheck } from 'react-icons/ai';

type CodeProps = {
  children: string;
};

export const Code: React.FC<CodeProps> = ({ children }) => {
  const writeToClipboard = () => navigator.clipboard.writeText(children);

  const handleClick = async () => {
    await writeToClipboard();
    setIcon('check');
    setTimeout(() => {
      setIcon('copy');
    }, 1000);
  };
  const [icon, setIcon] = useState<'copy' | 'check'>('copy');
  return (
    <div className='relative rounded-2xl overflow-hidden border-solid border-4 border-green-700'>
      <SyntaxHighlighter
        style={tomorrow}
        language={'tsx'}
        customStyle={{ marginTop: 0, marginBottom: 0, borderRadius: 10 }}
      >
        {children}
      </SyntaxHighlighter>
      <button
        onClick={handleClick}
        disabled={icon === 'check'}
        className='absolute top-4 right-4 text-black bg-gray-400 p-1 rounded-md hover:bg-gray-100 transition ease-in-out hover:scale-110'
      >
        {icon === 'copy' ? <AiOutlineCopy /> : <AiOutlineCheck />}
      </button>
    </div>
  );
};
