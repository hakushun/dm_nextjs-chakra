import { Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react';
import { useTodos } from '../../libs/hooks/useTodos';
import { ContentWrapper } from '../ContentWrapper';

export const Todos = () => {
  const { todos, isLoading } = useTodos();

  return (
    <ContentWrapper isLoading={isLoading}>
      <Table size="sm">
        <Thead>
          <Tr>
            <Th isNumeric>ID</Th>
            <Th>Status</Th>
            <Th>Title</Th>
            <Th isNumeric>User</Th>
          </Tr>
        </Thead>
        <Tbody>
          {todos.map((todo) => (
            <Tr key={todo.id}>
              <Td isNumeric>{todo.id}</Td>
              <Td>{todo.completed ? 'DONE' : 'NEW'}</Td>
              <Td>{todo.title}</Td>
              <Td>{todo.userId}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </ContentWrapper>
  );
};
