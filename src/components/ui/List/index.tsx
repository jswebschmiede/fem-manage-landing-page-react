import { LayoutProps } from "../../../typings";

const List = ({ children }: LayoutProps) => {
  return <ul role="list">{children}</ul>;
};

export default List;
