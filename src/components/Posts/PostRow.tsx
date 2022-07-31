import { Tr, Td, Button, useDisclosure } from '@chakra-ui/react';
import { useUser } from '../../libs/hooks/useUser';
import { PostModal } from './PostModal';

type Props = {
  post: IPost;
};
export const PostRow = ({ post }: Props) => {
  const { user } = useUser(post.userId);
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
      <Td>{user?.name}</Td>
    </Tr>
  );
};
