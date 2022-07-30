import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import { Layout } from "../components/Layout";
import { Todos } from "../components/Todos";

const TodosPage: NextPageWithLayout = () => {
  return <Todos />;
};

TodosPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default TodosPage;
