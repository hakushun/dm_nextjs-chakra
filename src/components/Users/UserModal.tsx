import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalFooter,
  Flex,
  Link,
  VStack,
} from '@chakra-ui/react';

type Props = {
  user: IUser;
  isOpen: boolean;
  onClose: () => void;
};
export const UserModal = ({ user, isOpen, onClose }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{user.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack alignItems="normal" gap={1}>
            <Flex as="dl" justifyContent="space-between">
              <dt>Username</dt>
              <dd>{user.username}</dd>
            </Flex>
            <Flex as="dl" justifyContent="space-between">
              <dt>Email</dt>
              <dd>
                <Link href={`mailto:${user.email}`}>{user.email}</Link>
              </dd>
            </Flex>
            <Flex as="dl" justifyContent="space-between">
              <dt>Phone</dt>
              <dd>{user.phone}</dd>
            </Flex>
            <Flex as="dl" justifyContent="space-between">
              <dt>Website</dt>
              <dd>
                <Link href={user.website} target="_blank">
                  {user.website}
                </Link>
              </dd>
            </Flex>
          </VStack>
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
