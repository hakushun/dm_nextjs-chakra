import { Table, Thead, Tr, Th, Tbody } from '@chakra-ui/react';
import { useAlbums } from '../../libs/hooks/useAlbums';
import { ContentWrapper } from '../ContentWrapper';
import { AlbumRow } from './AlbumRow';

export const Albums = () => {
  const { albums, isLoading } = useAlbums();

  return (
    <ContentWrapper isLoading={isLoading}>
      <Table size="sm">
        <Thead>
          <Tr>
            <Th isNumeric>ID</Th>
            <Th>Title</Th>
            <Th>User</Th>
          </Tr>
        </Thead>
        <Tbody>
          {albums.map((album) => (
            <AlbumRow key={album.id} album={album} />
          ))}
        </Tbody>
      </Table>
    </ContentWrapper>
  );
};
