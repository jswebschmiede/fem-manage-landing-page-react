interface ListItem {
  number: string;
  title: string;
  children: string;
}

const ListItem = ({ number, title, children }: ListItem) => {
  return (
    <li className="flex items-baseline">
      <div className="mr-7" aria-hidden="true">
        <span className="flex grow-0 rounded-3xl bg-managebrightred py-2 px-6 text-base font-medium tracking-tighter text-white">
          {number}
        </span>
      </div>
      <div>
        <h3 className="mb-5 text-sm font-bold md:text-base">{title}</h3>
        <p className="text ml-21">{children}</p>
      </div>
    </li>
  );
};

export default ListItem;
