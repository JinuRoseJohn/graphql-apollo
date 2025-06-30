# Use the official Apollo Router image
FROM ghcr.io/apollographql/router:v2.3.0

# Copy your supergraph schema and config
COPY supergraph.graphql /dist/schema.graphql
COPY router-config.yaml /dist/router-config.yaml

# Start the router with your schema and config
CMD ["--supergraph", "/dist/schema.graphql", "--config", "/dist/router-config.yaml"]
