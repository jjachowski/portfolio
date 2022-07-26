import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head />
      <title>Jakub Jachowski - website</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <body className='bg-white dark:bg-zinc-800 text-gray-800 dark:text-gray-50'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
