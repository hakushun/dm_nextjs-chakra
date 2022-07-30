import type { ReactElement } from 'react';
import { Dashboard } from '../components/Dashboard';
import { Layout } from '../components/Layout';
import type { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return <Dashboard />;
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
