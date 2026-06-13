// pages/blog/[id].js
import Head from 'next/head';
import Link from 'next/link';
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
        <title>{postData.title} | Lesley Rich</title>
      </Head>
      <article className="mx-auto max-w-3xl py-12">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm font-medium text-slate-400 transition-colors hover:text-teal-300"
        >
          ← Back to all posts
        </Link>

        <header className="mt-6 border-b border-slate-800 pb-8">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-50 md:text-5xl">
            {postData.title}
          </h1>
          {postData.subtitle && (
            <p className="mt-3 text-xl text-slate-400">{postData.subtitle}</p>
          )}
          {postData.date && (
            <p className="mt-4 text-sm font-medium uppercase tracking-wider text-teal-400/80">
              {postData.date}
            </p>
          )}
        </header>

        <div
          className="prose prose-invert lg:prose-xl mt-10 max-w-none"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
    </>
  );
}
