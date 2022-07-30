import { Table, Thead, Tr, Th, Tbody, Td, Link } from "@chakra-ui/react";
import { useUsers } from "../../libs/hooks/useUsers";
import { ContentWrapper } from "../ContentWrapper";

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
            <Tr key={user.id}>
              <Td isNumeric>{user.id}</Td>
              <Td>{user.name}</Td>
              <Td>{user.username}</Td>
              <Td>
                <Link href={`mailto:${user.email}`}>{user.email}</Link>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </ContentWrapper>
  );
};
