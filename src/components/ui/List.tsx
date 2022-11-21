import { LayoutProps } from "../..";

const List = ({ children }: LayoutProps) => {
  return <ul role="list">{children}</ul>;
};

export default List;
