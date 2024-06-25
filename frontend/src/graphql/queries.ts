import { gql } from '@apollo/client';

export const GET_ALL_POSTS = gql`
  query GetAllPosts {
    posts {
      postId
      user {
        userId
        username
        profilePicture
      }
      content
      address
      location
      images
    }
  }
`;
