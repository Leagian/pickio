import { Post, User } from '@/generated/graphql-types';

interface PostCardProps {
  post: Post;
  user: User;
}

export const PostCard = ({ post, user }: PostCardProps) => {
  const { createdAt, images, likes, comments, content } = post;
  const { profilePicture, username } = user;

  return (
    <>
      <h3>{profilePicture}</h3>
      <h5>{username}</h5>
      <p>{createdAt}</p>
      {images.map((image: string, index: number) => (
        <img key={index} src={image} alt={`Post ${content}`} />
      ))}
      <p>{likes?.length || 0}</p>
      <p>{comments?.length || 0}</p>
      <p>{content}</p>
    </>
  );
};
