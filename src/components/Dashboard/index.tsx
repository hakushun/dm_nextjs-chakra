import { Stack } from '@chakra-ui/react';
import { useAlbums } from '../../libs/hooks/useAlbums';
import { usePosts } from '../../libs/hooks/usePosts';
import { useTodos } from '../../libs/hooks/useTodos';
import { useUsers } from '../../libs/hooks/useUsers';
import { ContentWrapper } from '../ContentWrapper';
import { TotalCard } from './TotalCard';

export const Dashboard = () => {
  const { posts, isLoading: postsLoading } = usePosts();
  const { todos, isLoading: todosLoading } = useTodos();
  const { users, isLoading: usersLoading } = useUsers();
  const { albums, isLoading: albumsLoading } = useAlbums();

  return (
    <ContentWrapper isLoading={postsLoading || todosLoading || usersLoading || albumsLoading}>
      <Stack spacing={8} direction="row">
        <TotalCard title="Posts" total={posts.length} />
        <TotalCard title="Todos" total={todos.length} />
        <TotalCard title="Users" total={users.length} />
        <TotalCard title="Albums" total={albums.length} />
      </Stack>
    </ContentWrapper>
  );
};
