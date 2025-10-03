import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export default function Post({ data, content }) {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
      <h1>{data.title}</h1>
      {data.cover && (
        <img
          src={data.cover}
          alt={data.title}
          style={{ maxWidth: "100%", borderRadius: "8px" }}
        />
      )}
      <div style={{ marginTop: "1rem" }}>
        <p>{content}</p>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const fileNames = fs.readdirSync(postsDirectory);
  const paths = fileNames.map((fileName) => ({
    params: { slug: fileName.replace(/\.md$/, "") },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const fullPath = path.join(postsDirectory, `${params.slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { props: { data, content } };
}
