import useSWR from 'swr';
import { fetcher } from '../fetch/fetcher';

export const useUser = (userId: number) => {
  const { data } = useSWR<IUser>(`https://jsonplaceholder.typicode.com/users/${userId}`, fetcher);

  return {
    user: data ?? null,
    isLoading: !data,
  };
};
