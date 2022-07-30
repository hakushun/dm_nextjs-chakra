import { Tr, Td, Link, Button, useDisclosure } from '@chakra-ui/react';
import { UserModal } from './UserModal';

type Props = {
  user: IUser;
};
export const UserRow = ({ user }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Tr key={user.id}>
      <Td isNumeric>{user.id}</Td>
      <Td>
        <Button variant="link" colorScheme="black" onClick={onOpen}>
          {user.name}
        </Button>
        <UserModal user={user} isOpen={isOpen} onClose={onClose} />
      </Td>
      <Td>{user.username}</Td>
      <Td>
        <Link href={`mailto:${user.email}`}>{user.email}</Link>
      </Td>
    </Tr>
  );
};
