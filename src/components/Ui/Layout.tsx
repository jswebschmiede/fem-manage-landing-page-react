import { LayoutProps } from "../../typings";

const Layout = ({ children }: LayoutProps) => {
  return <div className="wrapper relative overflow-hidden">{children}</div>;
};

export default Layout;
