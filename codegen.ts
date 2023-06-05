import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: "http://localhost:21010/graphql",
  documents: ["app/**/*.{ts, tsx}", "./lib/**/*.{ts, tsx}"],
  ignoreNoDocuments: true,
  generates: {
    "./lib/gql/": {
      preset: "client",
      plugins: []
    }
  },
};

export default config;
