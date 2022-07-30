import { Tr, Td, Button, useDisclosure } from '@chakra-ui/react';
import { PostModal } from './PostModal';

type Props = {
  post: IPost;
};
export const PostRow = ({ post }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Tr>
      <Td isNumeric>{post.id}</Td>
      <Td>
        <Button variant="link" colorScheme="black" onClick={onOpen}>
          {post.title}
        </Button>
        <PostModal post={post} isOpen={isOpen} onClose={onClose} />
      </Td>
      <Td>{post.userId}</Td>
    </Tr>
  );
};
