import type { ReactElement } from 'react';
import { Layout } from '../components/Layout';
import { Todos } from '../components/Todos';
import type { NextPageWithLayout } from './_app';

const TodosPage: NextPageWithLayout = () => {
  return <Todos />;
};

TodosPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default TodosPage;
