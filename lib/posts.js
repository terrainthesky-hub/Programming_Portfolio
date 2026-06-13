import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

// Pull a leading YYYY-M-D (or YYYY-MM-DD) date out of the file name.
// Returns { iso, display } or null when the file name has no date prefix.
function parseDateFromFileName(fileName) {
  const match = fileName.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
  if (!match) return null;

  const [, year, month, day] = match;
  const iso = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  const date = new Date(`${iso}T00:00:00`);
  const display = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return { iso, display };
}

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    const parsedDate = parseDateFromFileName(fileName);

    return {
      id,
      // Date comes from the file name; fall back to any frontmatter date.
      date: parsedDate?.display ?? matterResult.data.date ?? '',
      dateSort: parsedDate?.iso ?? matterResult.data.date ?? '',
      // Use the post subtitle as the card excerpt (falling back to an explicit excerpt).
      excerpt: matterResult.data.excerpt ?? matterResult.data.subtitle ?? '',
      ...matterResult.data,
    };
  });

  // Sort newest first by the ISO date derived from the file name.
  return allPostsData.sort((a, b) => (a.dateSort < b.dateSort ? 1 : -1));
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  const parsedDate = parseDateFromFileName(`${id}.md`);

  return {
    id,
    contentHtml,
    date: parsedDate?.display ?? matterResult.data.date ?? '',
    ...matterResult.data,
  };
}
