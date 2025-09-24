import { Outlet } from "react-router-dom";
import { Layout } from "antd";

const BaseLayout = () => {
  return (
    <Layout className={"!min-h-screen"}>
      <Outlet />
    </Layout>
  );
};

export default BaseLayout;
