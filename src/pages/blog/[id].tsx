import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { Layout } from '../../components/Layout';
import { prisma } from '../../server/db/client';

export async function getStaticPaths() {
  const postIds = await prisma.blogPost.findMany({ select: { id: true } });
  return {
    paths: postIds.map((x) => ({
      params: {
        id: x.id.toString(),
      },
    })),
    fallback: false,
  };
}

export const getStaticProps = async (
  context: GetStaticPropsContext<{ id: string }>
) => {
  const post = await prisma.blogPost.findFirst({
    where: { id: Number(context.params?.id) },
  });
  return {
    props: {
      ...post,
    },
  };
};

const BlogPost = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <div className=' mt-8 font-mono text-indigo-500 text-xl hover:text-indigo-700 hover:underline '>
        <Link href='/'>⏎ back to homepage</Link>
      </div>
      <h1 className='text-6xl font-bold mt-8 text-indigo-600'>{props.title}</h1>
      <p className='font-mono'>11.07.2022 • ⏳⏳ 10 min read</p>
      <div className='mt-8 bg-indigo-100 p-8 rounded-2xl shadow-md'>
        <p className='text-lg'>{props.text}</p>
      </div>
    </Layout>
  );
};

export default BlogPost;
