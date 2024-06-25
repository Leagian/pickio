import { useGetAllPostsQuery, Post } from '@/generated/graphql-types';
import { PostCard } from './PostCard';

export const PostList = () => {
  const { data, loading, error } = useGetAllPostsQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error </p>;

  return (
    <div>
      {data?.posts.map((post) => (
        <PostCard key={post.postId} post={post as Post} />
      ))}
    </div>
  );
};
