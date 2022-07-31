import { Table, Thead, Tr, Th, Tbody } from '@chakra-ui/react';
import { useTodos } from '../../libs/hooks/useTodos';
import { ContentWrapper } from '../ContentWrapper';
import { TodoRow } from './TodoRow';

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
            <Th>User</Th>
          </Tr>
        </Thead>
        <Tbody>
          {todos.map((todo) => (
            <TodoRow key={todo.id} todo={todo} />
          ))}
        </Tbody>
      </Table>
    </ContentWrapper>
  );
};
