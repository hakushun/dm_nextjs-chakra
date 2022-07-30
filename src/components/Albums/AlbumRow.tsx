import { Tr, Td, Button } from '@chakra-ui/react';

type Props = {
  album: IAlbum;
};
export const AlbumRow = ({ album }: Props) => {
  return (
    <Tr>
      <Td isNumeric>{album.id}</Td>
      <Td>
        <Button variant="link" colorScheme="black">
          {album.title}
        </Button>
      </Td>
      <Td>{album.userId}</Td>
    </Tr>
  );
};
