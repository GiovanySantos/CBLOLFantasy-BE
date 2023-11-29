import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import { schema, resolvers } from './graphql/index.js';

const buildServer = async () => {
  const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀  Server ready at: ${url}`);
};

export { buildServer };
