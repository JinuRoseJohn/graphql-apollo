const { ApolloServer } = require('apollo-server');
const { buildSubgraphSchema } = require('@apollo/subgraph');
const fs = require('fs');
const { gql } = require('graphql-tag');

const path = require('path');
const schemaPath = path.join(__dirname, 'schema.graphql');
const typeDefs = gql(fs.readFileSync(schemaPath, 'utf8'));

const resolvers = {
    Query: {
        hello: () => 'Hello from Query Subgraph',
    },
};

const server = new ApolloServer({
    schema: buildSubgraphSchema([{ typeDefs, resolvers }]),
});

server.listen({ port: 4001 }).then(({ url }) => {
    console.log(`Query Subgraph ready at ${url}`);
});
