import useSWR from "swr";
import { fetcher } from "../fetch/fetcher";

export const useUsers = () => {
  const { data } = useSWR<IUser[]>(
    "https://jsonplaceholder.typicode.com/users",
    fetcher
  );

  return {
    users: data ?? [],
    isLoading: !data,
  };
};
