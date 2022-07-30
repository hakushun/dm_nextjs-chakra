import useSWR from "swr";
import { fetcher } from "../fetch/fetcher";

export const useTodos = () => {
  const { data } = useSWR<ITodo[]>(
    "https://jsonplaceholder.typicode.com/todos",
    fetcher
  );

  return {
    todos: data ?? [],
    isLoading: !data,
  };
};
