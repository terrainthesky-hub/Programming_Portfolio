// pages/blog/[id].js
import Head from 'next/head';
import { getAllPostIds, getPostData } from '../../lib/posts';

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className="max-w-3xl mx-auto py-12">
        <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">{postData.title}</h1>
          <p className="text-gray-500 mb-8">{postData.date}</p>
          <div 
            className="prose lg:prose-xl max-w-none" 
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
          />
        </div>
      </article>
    </>
  );
}