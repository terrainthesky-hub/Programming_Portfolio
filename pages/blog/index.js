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
        <title>Blog | Your Name</title>
      </Head>
      <section className="py-12">
        <h1 className="text-4xl font-bold text-center mb-12">My Blog</h1>
        <div className="max-w-3xl mx-auto space-y-8">
          {allPostsData.map(({ id, date, title, excerpt }) => (
            <Link href={`/blog/${id}`} key={id}>
              <div className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
                <p className="text-gray-500 text-sm mb-4">{date}</p>
                <p className="text-gray-600">{excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}