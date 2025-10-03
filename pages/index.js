import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

const postsDirectory = path.join(process.cwd(), "posts");

export default function Home({ posts }) {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
      <h1>Mi Blog</h1>
      {posts.map(({ slug, data }) => (
        <div key={slug} style={{ marginBottom: "2rem" }}>
          <h2>
            <Link href={`/posts/${slug}`}>{data.title}</Link>
          </h2>
          {data.cover && (
            <img
              src={data.cover}
              alt={data.title}
              style={{ maxWidth: "100%", borderRadius: "8px" }}
            />
          )}
          <p>{data.excerpt}</p>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      data: {
        ...data,
        excerpt: content.slice(0, 200) + "...",
      },
    };
  });

  return { props: { posts } };
}
