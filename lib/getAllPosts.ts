import { gql } from "@apollo/client";
import { getClient } from "@/lib/apolloClient";

const query = gql`
  query Query {
    getPosts {
      uuid
      title
    }
  }
`;

export default async function getAllPosts() {
  const { data } = await getClient().query({
    query,
    context: {
      fetchOptions: {
        next: { revalidate: 0 },
        cache: 'no-store'
      },
    },
  });

  if (!data.getPosts) return {};

  return data.getPosts;
}
