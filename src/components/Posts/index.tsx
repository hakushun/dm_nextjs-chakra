import { Table, Thead, Tr, Th, Tbody, Td, Text } from "@chakra-ui/react";
import { usePosts } from "../../libs/hooks/usePosts";
import { ContentWrapper } from "../ContentWrapper";

export const Posts = () => {
  const { posts, isLoading } = usePosts();

  return (
    <ContentWrapper isLoading={isLoading}>
      <Table size="sm">
        <Thead>
          <Tr>
            <Th isNumeric>ID</Th>
            <Th>Title</Th>
            <Th>Body</Th>
            <Th isNumeric>User</Th>
          </Tr>
        </Thead>
        <Tbody>
          {posts.map((post) => (
            <Tr key={post.id}>
              <Td isNumeric>{post.id}</Td>
              <Td>
                <Text noOfLines={1} maxW={200} whiteSpace="pre-wrap">
                  {post.title}
                </Text>
              </Td>
              <Td>
                <Text noOfLines={1} maxW={500} whiteSpace="pre-wrap">
                  {post.body}
                </Text>
              </Td>
              <Td>{post.userId}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </ContentWrapper>
  );
};
