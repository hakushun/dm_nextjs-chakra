import useSWR from 'swr';
import { fetcher } from '../fetch/fetcher';

export const useAlbums = () => {
  const { data } = useSWR<IAlbum[]>('https://jsonplaceholder.typicode.com/albums', fetcher);

  return {
    albums: data ?? [],
    isLoading: !data,
  };
};
