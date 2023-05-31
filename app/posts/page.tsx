import Link from "next/link";
import getAllPosts from "@/lib/getAllPosts";

export default async function Posts() {
  const posts = await getAllPosts();

  return (
    <ul>
      {posts.map((post: Post) => (
        <>
          <Link href={`/posts/${post.uuid}`} key={post.uuid}><h1 className="font-bold font-xl">{post.title}</h1></Link>
          <br />
        </>
      ))}
    </ul>
  );
};

