import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  JSONObject: { input: any; output: any; }
};

export type Bookmark = {
  __typename?: 'Bookmark';
  bookmarkId: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  postId: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type BookmarkCreateInput = {
  postId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type Comment = {
  __typename?: 'Comment';
  commentId: Scalars['ID']['output'];
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  post: Post;
  postId: Scalars['String']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type CommentCreateInput = {
  content: Scalars['String']['input'];
  postId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type Like = {
  __typename?: 'Like';
  createdAt: Scalars['DateTime']['output'];
  likeId: Scalars['ID']['output'];
  post: Post;
  postId: Scalars['String']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type LikeCreateInput = {
  postId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type LikesAndCount = {
  __typename?: 'LikesAndCount';
  count: Scalars['Float']['output'];
  likes: Array<Like>;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String']['output'];
  user: User;
};

export type LoginUserInput = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createBookmark: Bookmark;
  createComment: Comment;
  createLike: Like;
  createPost: Post;
  createShare: Share;
  createUser: User;
  deleteBookmark: Bookmark;
  deleteComment: Comment;
  deleteLike: Like;
  deletePost: Post;
  deleteShare: Share;
  deleteUser: User;
  followUser: UserFollows;
  login: LoginResponse;
  sharePostWithFollowings: Array<Share>;
  signup: User;
  updatePost: Post;
  updateUser: User;
};


export type MutationCreateBookmarkArgs = {
  data: BookmarkCreateInput;
};


export type MutationCreateCommentArgs = {
  data: CommentCreateInput;
  postId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


export type MutationCreateLikeArgs = {
  data: LikeCreateInput;
};


export type MutationCreatePostArgs = {
  data: PostCreateInput;
};


export type MutationCreateShareArgs = {
  data: ShareCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteBookmarkArgs = {
  bookmarkId: Scalars['String']['input'];
};


export type MutationDeleteCommentArgs = {
  commentId: Scalars['String']['input'];
  postId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


export type MutationDeleteLikeArgs = {
  likeId: Scalars['String']['input'];
  postId: Scalars['String']['input'];
};


export type MutationDeletePostArgs = {
  postId: Scalars['String']['input'];
};


export type MutationDeleteShareArgs = {
  shareId: Scalars['String']['input'];
};


export type MutationDeleteUserArgs = {
  userId: Scalars['String']['input'];
};


export type MutationFollowUserArgs = {
  followerId: Scalars['String']['input'];
  followingId: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  loginUserInput: LoginUserInput;
};


export type MutationSharePostWithFollowingsArgs = {
  followingIds: Array<Scalars['String']['input']>;
  postId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


export type MutationSignupArgs = {
  userCreateInput: UserCreateInput;
};


export type MutationUpdatePostArgs = {
  data: PostUpdateInput;
  postId: Scalars['String']['input'];
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  userId: Scalars['String']['input'];
};

export type Post = {
  __typename?: 'Post';
  address?: Maybe<Scalars['String']['output']>;
  bookmarks?: Maybe<Array<Bookmark>>;
  comments?: Maybe<Array<Comment>>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  images: Array<Scalars['String']['output']>;
  likes?: Maybe<Array<Like>>;
  location?: Maybe<Scalars['JSONObject']['output']>;
  postId: Scalars['ID']['output'];
  shares?: Maybe<Array<Share>>;
  tags: Array<Scalars['String']['output']>;
  user: User;
  userId: Scalars['String']['output'];
};

export type PostCreateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  images: Array<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['JSONObject']['input']>;
  tags: Array<Scalars['String']['input']>;
  userId: Scalars['String']['input'];
};

export type PostUpdateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  location?: InputMaybe<Scalars['JSONObject']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  userId: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  bookmarks: Array<Bookmark>;
  comments: Array<Comment>;
  followers: Array<User>;
  followings: Array<User>;
  getFollowersCount: Scalars['Float']['output'];
  getFollowingsCount: Scalars['Float']['output'];
  getLikesAndCountByPostId: LikesAndCount;
  getSharedPosts: Array<Share>;
  post: Post;
  posts: Array<Post>;
  postsByFollowingId: Array<Post>;
  postsByUserId: Array<Post>;
  searchUsers: Array<UserSearchResult>;
  userById: User;
  userByUsername: User;
  users: Array<User>;
};


export type QueryBookmarksArgs = {
  userId: Scalars['String']['input'];
};


export type QueryCommentsArgs = {
  postId: Scalars['String']['input'];
};


export type QueryFollowersArgs = {
  userId: Scalars['String']['input'];
};


export type QueryFollowingsArgs = {
  userId: Scalars['String']['input'];
};


export type QueryGetFollowersCountArgs = {
  userId: Scalars['String']['input'];
};


export type QueryGetFollowingsCountArgs = {
  userId: Scalars['String']['input'];
};


export type QueryGetLikesAndCountByPostIdArgs = {
  postId: Scalars['String']['input'];
};


export type QueryGetSharedPostsArgs = {
  userId: Scalars['String']['input'];
};


export type QueryPostArgs = {
  postId: Scalars['String']['input'];
};


export type QueryPostsByFollowingIdArgs = {
  userId: Scalars['String']['input'];
};


export type QueryPostsByUserIdArgs = {
  userId: Scalars['String']['input'];
};


export type QuerySearchUsersArgs = {
  query: Scalars['String']['input'];
};


export type QueryUserByIdArgs = {
  userId: Scalars['String']['input'];
};


export type QueryUserByUsernameArgs = {
  username: Scalars['String']['input'];
};

export type Share = {
  __typename?: 'Share';
  createdAt: Scalars['DateTime']['output'];
  post: Post;
  postId: Scalars['String']['output'];
  shareId: Scalars['ID']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type ShareCreateInput = {
  postId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  bio?: Maybe<Scalars['String']['output']>;
  bookmarks: Array<Bookmark>;
  comments: Array<Comment>;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  followers?: Maybe<Array<UserFollows>>;
  followings?: Maybe<Array<UserFollows>>;
  interests?: Maybe<Scalars['String']['output']>;
  likes: Array<Like>;
  posts?: Maybe<Array<Post>>;
  profilePicture?: Maybe<Scalars['String']['output']>;
  shares: Array<Share>;
  userId: Scalars['ID']['output'];
  username: Scalars['String']['output'];
};

export type UserCreateInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  interests?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  profilePicture?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
};

export type UserFollows = {
  __typename?: 'UserFollows';
  createdAt: Scalars['DateTime']['output'];
  follower: User;
  followerId: Scalars['String']['output'];
  following: User;
  followingId: Scalars['String']['output'];
  userFollowsId: Scalars['ID']['output'];
};

export type UserSearchResult = {
  __typename?: 'UserSearchResult';
  userId: Scalars['ID']['output'];
  username: Scalars['String']['output'];
};

export type UserUpdateInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  interests?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  profilePicture?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type CreatePostMutationVariables = Exact<{
  data: PostCreateInput;
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost: { __typename?: 'Post', postId: string, content?: string | null, images: Array<string> } };

export type GetAllPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPostsQuery = { __typename?: 'Query', posts: Array<{ __typename?: 'Post', postId: string, content?: string | null, address?: string | null, location?: any | null, images: Array<string>, user: { __typename?: 'User', userId: string, username: string, profilePicture?: string | null } }> };


export const CreatePostDocument = gql`
    mutation CreatePost($data: PostCreateInput!) {
  createPost(data: $data) {
    postId
    content
    images
  }
}
    `;
export type CreatePostMutationFn = Apollo.MutationFunction<CreatePostMutation, CreatePostMutationVariables>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreatePostMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostMutation, CreatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, options);
      }
export type CreatePostMutationHookResult = ReturnType<typeof useCreatePostMutation>;
export type CreatePostMutationResult = Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<CreatePostMutation, CreatePostMutationVariables>;
export const GetAllPostsDocument = gql`
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

/**
 * __useGetAllPostsQuery__
 *
 * To run a query within a React component, call `useGetAllPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllPostsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllPostsQuery, GetAllPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllPostsQuery, GetAllPostsQueryVariables>(GetAllPostsDocument, options);
      }
export function useGetAllPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPostsQuery, GetAllPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllPostsQuery, GetAllPostsQueryVariables>(GetAllPostsDocument, options);
        }
export function useGetAllPostsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllPostsQuery, GetAllPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllPostsQuery, GetAllPostsQueryVariables>(GetAllPostsDocument, options);
        }
export type GetAllPostsQueryHookResult = ReturnType<typeof useGetAllPostsQuery>;
export type GetAllPostsLazyQueryHookResult = ReturnType<typeof useGetAllPostsLazyQuery>;
export type GetAllPostsSuspenseQueryHookResult = ReturnType<typeof useGetAllPostsSuspenseQuery>;
export type GetAllPostsQueryResult = Apollo.QueryResult<GetAllPostsQuery, GetAllPostsQueryVariables>;