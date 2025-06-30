const { ApolloServer } = require('apollo-server');
const { buildSubgraphSchema } = require('@apollo/subgraph');
const fs = require('fs');
const { gql } = require('graphql-tag');

let message = "Initial Message";

const path = require('path');
const schemaPath = path.join(__dirname, 'schema.graphql');
const typeDefs = gql(fs.readFileSync(schemaPath, 'utf8'));

const resolvers = {
    Mutation: {
        updateMessage: (_, { newMessage }) => {
            message = newMessage;
            return message;
        },
    },
};

const server = new ApolloServer({
    schema: buildSubgraphSchema([{ typeDefs, resolvers }]),
});

server.listen({ port: 4002 }).then(({ url }) => {
    console.log(`Mutation Subgraph ready at ${url}`);
});
