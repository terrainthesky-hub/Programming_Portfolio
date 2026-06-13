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
        <title>Lesley Rich | Software Dev & Data Scientist</title>
        <meta name="description" content="Portfolio of a software developer and data scientist." />
      </Head>

      {/* Hero Section */}
      <section className="py-24 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 px-4 py-1.5 text-sm font-medium text-teal-300">
          <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
          Software Developer & Data Scientist
        </span>
        <h1 className="mt-6 text-5xl font-extrabold leading-tight tracking-tight text-slate-50 md:text-7xl">
          Hi, I&apos;m{' '}
          <span className="bg-gradient-to-r from-teal-300 to-indigo-400 bg-clip-text text-transparent">
            Lesley
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-xl text-slate-400">
          I build intelligent applications and turn complex data into insight.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <Link
            href="/blog"
            className="rounded-lg bg-teal-400 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-teal-500/20 transition-all hover:bg-teal-300 hover:shadow-teal-400/30"
          >
            Read the Blog
          </Link>
          <a
            href="https://github.com/terrainthesky-hub"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition-colors hover:border-teal-400 hover:text-teal-300"
          >
            View GitHub
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12">
        <h2 className="mb-8 text-center text-3xl font-bold text-slate-100">About Me</h2>
        <div className="mx-auto max-w-3xl rounded-2xl border border-slate-800 bg-slate-800/40 p-8 shadow-xl backdrop-blur-sm">
          <p className="text-lg leading-relaxed text-slate-300">
            I&apos;m a passionate developer with a dual focus in software development and data
            science. I love leveraging my skills in Python, JavaScript, and machine learning to
            create meaningful products and extract insights from data. I thrive in environments
            where I can tackle complex problems and continuously learn.
          </p>
        </div>
      </section>

      {/* More of My Work Section */}
      <section className="py-12">
        <h2 className="mb-8 text-center text-3xl font-bold text-slate-100">More of My Work</h2>
        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
          <a
            href="https://terrainthesky-hub.github.io/CNC_Portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col rounded-2xl border border-slate-800 bg-slate-800/40 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/60 hover:shadow-teal-500/10"
          >
            <span className="mb-2 text-xs font-medium uppercase tracking-wider text-teal-400/80">
              Machining
            </span>
            <h3 className="mb-2 flex items-center gap-2 text-lg font-bold text-slate-100 transition-colors group-hover:text-teal-300">
              CNC Portfolio
              <span className="text-slate-500 transition-transform group-hover:translate-x-0.5 group-hover:text-teal-300">
                ↗
              </span>
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              CAD/CAM designs and CNC-machined parts — from concept to finished product.
            </p>
          </a>

          <a
            href="https://www.shortstorylovers.com/story/everlife-30960"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col rounded-2xl border border-slate-800 bg-slate-800/40 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/60 hover:shadow-teal-500/10"
          >
            <span className="mb-2 text-xs font-medium uppercase tracking-wider text-teal-400/80">
              Creative Writing
            </span>
            <h3 className="mb-2 flex items-center gap-2 text-lg font-bold text-slate-100 transition-colors group-hover:text-teal-300">
              Everlife
              <span className="text-slate-500 transition-transform group-hover:translate-x-0.5 group-hover:text-teal-300">
                ↗
              </span>
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              A short story I wrote, published on Short Story Lovers.
            </p>
          </a>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-12">
        <h2 className="mb-8 text-center text-3xl font-bold text-slate-100">Latest Posts</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {allPostsData.slice(0, 3).map(({ id, date, title, excerpt }) => (
            <Link
              href={`/blog/${id}`}
              key={id}
              className="group flex flex-col rounded-2xl border border-slate-800 bg-slate-800/40 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/60 hover:shadow-teal-500/10"
            >
              {date && (
                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-teal-400/80">
                  {date}
                </p>
              )}
              <h3 className="mb-3 text-lg font-bold text-slate-100 transition-colors group-hover:text-teal-300">
                {title}
              </h3>
              {excerpt && <p className="text-sm leading-relaxed text-slate-400">{excerpt}</p>}
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="font-semibold text-teal-400 transition-colors hover:text-teal-300"
          >
            View all posts →
          </Link>
        </div>
      </section>
    </>
  );
}
