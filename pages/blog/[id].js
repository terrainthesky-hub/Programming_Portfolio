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
        <div className="block bg-slate-800 rounded-lg shadow-lg hover:shadow-cyan-500/10 border border-slate-700 hover:border-teal-400 transition-all duration-300 p-6 cursor-pointer">
          <h1 className="text-4xl font-extrabold text-white mb-2">{postData.title}</h1>
          <p className="text-gray-400 mb-8">{postData.date}</p>
          <div
            className="prose lg:prose-xl max-w-none text-white space-y-6"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
        </div>
      </article>
    </>
  );
}