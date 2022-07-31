import { Tr, Td } from '@chakra-ui/react';
import { useUser } from '../../libs/hooks/useUser';

type Props = {
  todo: ITodo;
};
export const TodoRow = ({ todo }: Props) => {
  const { user } = useUser(todo.userId);

  return (
    <Tr>
      <Td isNumeric>{todo.id}</Td>
      <Td>{todo.completed ? 'DONE' : 'NEW'}</Td>
      <Td>{todo.title}</Td>
      <Td>{user?.name}</Td>
    </Tr>
  );
};
