import { Table, Thead, Tr, Th, Tbody } from '@chakra-ui/react';
import { useUsers } from '../../libs/hooks/useUsers';
import { ContentWrapper } from '../ContentWrapper';
import { UserRow } from './UserRow';

export const Users = () => {
  const { users, isLoading } = useUsers();

  return (
    <ContentWrapper isLoading={isLoading}>
      <Table size="sm">
        <Thead>
          <Tr>
            <Th isNumeric>ID</Th>
            <Th>Name</Th>
            <Th>Username</Th>
            <Th>Email</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user) => (
            <UserRow key={user.id} user={user} />
          ))}
        </Tbody>
      </Table>
    </ContentWrapper>
  );
};
