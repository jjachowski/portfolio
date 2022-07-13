import React from 'react';
import { useRouter } from 'next/router';
import { Layout } from '../../components/Layout';
import Link from 'next/link';
interface BlogPostProps {}

const BlogPost: React.FC<BlogPostProps> = ({}) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout>
      <div className=' mt-8 font-mono text-indigo-500 text-xl hover:text-indigo-700 hover:underline '>
        <Link href='/'>⏎ back to homepage</Link>
      </div>
      <h1 className='text-6xl font-bold mt-8 text-indigo-600'>{id}</h1>
      <p className='font-mono'>11.07.2022 • ⏳⏳ 10 min read</p>
      <div className='mt-8 bg-indigo-100 p-8 rounded-2xl shadow-md'>
        <p className='text-lg'>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?
        </p>
      </div>
    </Layout>
  );
};

export default BlogPost;
