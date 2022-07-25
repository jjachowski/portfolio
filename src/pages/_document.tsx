import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head />
      <body className='bg-white dark:bg-zinc-800 text-gray-800 dark:text-gray-50'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
