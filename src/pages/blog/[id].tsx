import React from 'react';
import { useRouter } from 'next/router';
import { Layout } from '../../components/Layout';
import Link from 'next/link';
import { trpc } from '../../utils/trpc';
import {
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import { createSSGHelpers } from '@trpc/react/ssg';
import { blogPostRouter } from '../../server/router/example';
import { createContext, createRouter } from '../../server/router/context';
import { prisma } from '../../server/db/client';

export async function getStaticPaths() {
  // const { data } = trpc.useQuery(['blogPost.posts']);
  console.log('HERE');
  const postIds = await prisma.blogposts.findMany({ select: { id: true } });
  console.log('postIds: ', postIds);
  return {
    paths: postIds.map((x) => ({
      params: {
        id: x.id.toString(),
      },
    })),
    fallback: false, // false or 'blocking'
  };
}

export const getStaticProps = async (
  context: GetStaticPropsContext<{ id: string }>
) => {
  const post = await prisma.blogposts.findFirst({
    where: { id: Number(context.params?.id) },
  });
  return {
    props: {
      ...post,
    },
  };

  // const ssg = await createSSGHelpers({
  //   router: blogPostRouter,
  //   ctx: {},
  // });
  // if (context?.params?.id) {
  //   const id = Number(context?.params?.id);
  //   await ssg.fetchQuery('post', { id });
  //   return {
  //     props: { trpcState: ssg.dehydrate(), id: context?.params?.id },
  //     revalidate: 1,
  //   };
  // }
  // return {
  //   redirect: {
  //     destination: '/',
  //     permanent: true,
  //   },
  // };
};

// export async function getStaticProps(context) {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const res = await fetch('https://.../posts')
//   const posts = await res.json()

//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       posts,
//     },
//   }
// }

type BlogPostProps = {
  // title: string;
  // text: string;
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
