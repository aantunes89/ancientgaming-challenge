import gql from 'graphql-tag';

export const getPostsQuery = gql`
  query allPosts($options: PageQueryOptions) {
    posts(options: $options) {
      data {
        id
        title
        body
      }
    }
  }
`;

export const getPostsQueryVariables = { options: { paginate: { page: 1, limit: 10 } } };
