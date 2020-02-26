import { config as dotenvConfig } from "dotenv";
dotenvConfig();

import { ApolloServer, gql, makeExecutableSchema } from "apollo-server";
import { importSchema } from "graphql-import";
import * as path from "path";

import resolvers from "./graphql/resolvers";
import { initPgConnection } from "./orm";
import { formatError } from "./graphql/utils";
import { Context } from "./shared/context";

const stringSchema = importSchema(path.join(__dirname, "./graphql/schema/schema.graphql"));
export const typeDefs = gql`
    ${stringSchema}
`;

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export function startGatherApollo() {
    return new ApolloServer({
        schema,
        engine: { apiKey: process.env.APOLLO_ENGINE_API_KEY },
        formatError,
        playground: true,
        introspection: process.env.INTROSPECTION === "true"
    });
}

async function initialize() {
    console.log(`Waiting on Typeorm.`);
    // Order matters here; the postgres connection must be established before starting apollo server
    await initPgConnection();
    console.log(`Typeorm Connection ready.`);

    const apolloServer = startGatherApollo();
    const { url } = await apolloServer.listen({
        host: process.env.APOLLO_HOST,
        port: process.env.PORT ? process.env.PORT : 6001
    });

    console.log(`Apollo Server ready at ${url}.`);

    return apolloServer;
}

if (process.mainModule && process.mainModule.filename === __filename) {
    initialize();
}
