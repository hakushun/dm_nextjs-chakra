import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalFooter,
  Container,
} from '@chakra-ui/react';
import { Comments } from './Comments';

type Props = {
  post: IPost;
  isOpen: boolean;
  onClose: () => void;
};
export const PostModal = ({ post, isOpen, onClose }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{post.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Container>{post.body}</Container>
          <Comments postId={post.id} />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="green" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
