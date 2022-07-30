import type { ReactElement } from 'react';
import { Layout } from '../components/Layout';
import { Users } from '../components/Users';
import type { NextPageWithLayout } from './_app';

const UsersPage: NextPageWithLayout = () => {
  return <Users />;
};

UsersPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default UsersPage;
