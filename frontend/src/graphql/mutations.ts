import { gql } from '@apollo/client';

export const CREATE_POST_MUTATION = gql`
  mutation CreatePost($data: PostCreateInput!) {
    createPost(data: $data) {
      postId
      content
      images
    }
  }
`;
