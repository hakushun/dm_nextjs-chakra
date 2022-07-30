import { Table, Thead, Tr, Th, Tbody } from '@chakra-ui/react';
import { usePosts } from '../../libs/hooks/usePosts';
import { ContentWrapper } from '../ContentWrapper';
import { PostRow } from './PostRow';

export const Posts = () => {
  const { posts, isLoading } = usePosts();

  return (
    <ContentWrapper isLoading={isLoading}>
      <Table size="sm">
        <Thead>
          <Tr>
            <Th isNumeric>ID</Th>
            <Th>Title</Th>
            <Th isNumeric>User</Th>
          </Tr>
        </Thead>
        <Tbody>
          {posts.map((post) => (
            <PostRow key={post.id} post={post} />
          ))}
        </Tbody>
      </Table>
    </ContentWrapper>
  );
};
