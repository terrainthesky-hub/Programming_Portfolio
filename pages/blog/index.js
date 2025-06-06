// pages/blog/index.js
import Head from 'next/head';
import Link from 'next/link';
import { getSortedPostsData } from '../../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }) {
  return (
    <>
      <Head>
        <title>Blog | Lesley</title>
      </Head>
      <section className="py-12">
        <h1 className="text-4xl font-bold text-center mb-12">My Blog</h1>
        <div className="max-w-3xl mx-auto space-y-8">
          {allPostsData.map(({ id, date, title, excerpt }) => (
            <Link href={`/blog/${id}`} key={id}>
              <div className="block bg-slate-800 rounded-lg shadow-lg hover:shadow-cyan-500/10 border border-slate-700 hover:border-teal-400 transition-all duration-300 p-6 cursor-pointer">
                <h3 className="text-xl font-bold text-slate-100 mb-2">{title}</h3>
                <p className="text-slate-400 text-sm mb-3">{date}</p>
                  <p className="text-slate-300">{excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}