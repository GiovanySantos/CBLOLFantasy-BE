import gql from 'graphql-tag';

const typeDefs = gql`
  type Query {
    hello: String!
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

export { typeDefs, resolvers };
