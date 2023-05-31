import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: "http://localhost:21010/graphql",
  documents: ["app/**/*.{ts, tsx}"],
  ignoreNoDocuments: true,
  generates: {
    "./src/gql/": {
      preset: "client",
      plugins: ["typescript", "typescript-urql"]
    }
  },
  config: {
    withHooks: true
  }
};

export default config;
