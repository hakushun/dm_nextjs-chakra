import { Box } from '@chakra-ui/react';
import type { ReactNode } from 'react';
import { Loading } from '../Loading';

type Props = {
  children: ReactNode;
  isLoading?: boolean;
};
export const ContentWrapper = ({ children, isLoading }: Props) => {
  if (isLoading) return <Loading />;

  return <Box p={8}>{children}</Box>;
};
