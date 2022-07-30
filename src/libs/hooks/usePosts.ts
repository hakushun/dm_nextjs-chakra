import useSWR from 'swr';
import { fetcher } from '../fetch/fetcher';

export const usePosts = () => {
  const { data } = useSWR<IPost[]>('https://jsonplaceholder.typicode.com/posts', fetcher);

  return {
    posts: data ?? [],
    isLoading: !data,
  };
};
