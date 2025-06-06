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
<section className="text-center py-20 sm:py-24 lg:py-32">
  <h1 className="text-5xl md:text-7xl font-extrabold text-slate-100 leading-tight">
    Hi, I'm <span className="text-teal-400">Lesley</span>.
  </h1>
  <p className="mt-6 text-xl text-slate-400 max-w-2xl mx-auto">
    I build intelligent applications and analyze complex data. Welcome to my digital space.
  </p>
  <div className="mt-8 flex justify-center gap-4">
    <a href="#projects" className="bg-teal-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-teal-600 transition-all duration-300">
      View My Work
    </a>
    <a href="/blog" className="bg-slate-700 text-slate-200 font-semibold py-3 px-6 rounded-lg hover:bg-slate-600 transition-all duration-300">
      Read My Blog
    </a>
  </div>
</section>
    </>
  );
}