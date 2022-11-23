export interface ListProp {
  number: string;
  title: string;
  description: string;
}

const ListItem = ({ number, title, description }: ListProp) => {
  return (
    <li className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
      <div className="flex h-7 w-12 items-center justify-center rounded-2xl bg-managebrightred text-white sm:shrink-0">
        <span aria-hidden="true">{number}</span>
      </div>
      <div className="sm:min-w-0 sm:flex-1">
        <h3 className="mb-5 font-bold">{title}</h3>
        <p className="text">{description}</p>
      </div>
    </li>
  );
};

export default ListItem;
