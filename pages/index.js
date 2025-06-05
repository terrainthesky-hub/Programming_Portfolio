// pages/index.js
import Head from 'next/head';
import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';

// This function runs at build time on the server
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>Your Name | Software Dev & Data Scientist</title>
        <meta name="description" content="Portfolio of a software developer and data scientist." />
      </Head>

      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Hi, I'm <span className="text-indigo-600">Your Name</span>.
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          I build intelligent applications and analyze complex data.
        </p>
      </section>

      {/* About Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <p className="text-lg text-gray-700">
            I'm a passionate developer with a dual focus in full-stack software development and data science. I love leveraging my skills in Python, JavaScript, and machine learning to create meaningful products and extract insights from data. I thrive in environments where I can tackle complex problems and continuously learn.
          </p>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Latest Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPostsData.slice(0, 3).map(({ id, date, title, excerpt }) => (
            <Link href={`/blog/${id}`} key={id}>
              <div className="block bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 cursor-pointer">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm mb-3">{date}</p>
                <p className="text-gray-700">{excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
            <Link href="/blog" className="text-indigo-600 font-semibold hover:underline">
                View all posts →
            </Link>
        </div>
      </section>
    </>
  );
}