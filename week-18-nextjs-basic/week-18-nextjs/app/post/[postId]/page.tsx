import axios from "axios";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function Post({ params }: any) {
  const post = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );

  return <div>{post.data.title}</div>;
}
