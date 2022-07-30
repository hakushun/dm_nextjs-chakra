import { Text, Box, VStack, StackDivider, Container } from '@chakra-ui/react';
import { useComments } from '../../libs/hooks/useComments';
import { Loading } from '../Loading';

type Props = {
  postId: number;
};
export const Comments = ({ postId }: Props) => {
  const { comments, isLoading } = useComments(postId);

  return (
    <Box>
      <Text fontSize="3xl">Comments</Text>
      {isLoading ? (
        <Loading />
      ) : (
        <VStack divider={<StackDivider borderColor="gray" />}>
          {comments.map((comment) => (
            <Box key={comment.id}>
              <Text fontSize="xl" fontWeight="bold">
                {comment.name}
              </Text>
              <Container>{comment.body}</Container>
            </Box>
          ))}
        </VStack>
      )}
    </Box>
  );
};
