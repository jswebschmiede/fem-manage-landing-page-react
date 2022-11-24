import ListItem, { ListProp } from "./ListItem";

const features: ListProp[] = [
  {
    title: "Track company-wide progress",
    description:
      "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at he milestone level all the way done to the smallest of details. Never lose sight of he bigger picture again.",
    number: "01",
  },
  {
    title: "Advanced built-in reports",
    description:
      "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
    number: "02",
  },
  {
    title: "Everything you need in one place",
    description:
      "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
    number: "03",
  },
];

const List = () => {
  return (
    <ul>
      {features.map((feature) => (
        <ListItem
          key={feature.number}
          title={feature.title}
          number={feature.number}
          description={feature.description}
        />
      ))}
    </ul>
  );
};

export default List;
