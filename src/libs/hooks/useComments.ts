import useSWR from 'swr';
import { fetcher } from '../fetch/fetcher';

export const useComments = (postId: number) => {
  const { data } = useSWR<IComment[]>(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`,
    fetcher,
  );

  return {
    comments: data ?? [],
    isLoading: !data,
  };
};
