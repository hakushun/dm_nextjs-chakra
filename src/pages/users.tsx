import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import { Layout } from "../components/Layout";
import { Users } from "../components/Users";

const UsersPage: NextPageWithLayout = () => {
  return <Users />;
};

UsersPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default UsersPage;
