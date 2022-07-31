import useSWR from 'swr';
import { fetcher } from '../fetch/fetcher';

export const usePhotos = (albumId: number) => {
  const { data } = useSWR<IPhoto[]>(
    `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`,
    fetcher,
  );

  return {
    photos: data ?? [],
    isLoading: !data,
  };
};
