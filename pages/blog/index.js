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
        <title>Blog | Lesley Rich</title>
      </Head>
      <section className="py-16">
        <h1 className="text-center text-4xl font-extrabold tracking-tight text-slate-50 md:text-5xl">
          The Blog
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-center text-lg text-slate-400">
          Notes on software, data science, and whatever I&apos;m building lately.
        </p>

        <div className="mx-auto mt-12 max-w-3xl space-y-6">
          {allPostsData.map(({ id, date, title, excerpt }) => (
            <Link
              href={`/blog/${id}`}
              key={id}
              className="group block rounded-2xl border border-slate-800 bg-slate-800/40 p-6 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-400/60 hover:shadow-teal-500/10"
            >
              {date && (
                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-teal-400/80">
                  {date}
                </p>
              )}
              <h2 className="text-xl font-bold text-slate-100 transition-colors group-hover:text-teal-300">
                {title}
              </h2>
              {excerpt && <p className="mt-2 leading-relaxed text-slate-400">{excerpt}</p>}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
