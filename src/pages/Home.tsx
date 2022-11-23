import Carousel from "../components/Ui/Carousel";
import HeroHome from "../components/Ui/HeroHome";
import List from "../components/Ui/List";
import ListItem from "../components/Ui/List/ListItem";

const Home = () => {
  return (
    <>
      <HeroHome />

      <section className="container relative mt-24 py-16 lg:mt-0">
        <div className="grid gap-5 md:auto-cols-fr md:grid-flow-col">
          <div>
            <h2 className="mb-9 text-center text-xl font-bold lg:text-left lg:text-xl">
              What´s different about Manage?
            </h2>
            <p className="text text-center lg:w-7/12 lg:text-left">
              Manage provides all the functionality your team needs, without the
              complexity. Our software is tailor-made for modern digital product
              teams.
            </p>
          </div>

          <List>
            <ListItem number="01" title="Track company-wide progress">
              See how your day-to-day tasks fit into the wider vision. Go from
              tracking progress at the milestone level all the way done to the
              smallest of details. Never lose sight of the bigger picture again.
            </ListItem>

            <ListItem number="02" title="Advanced built-in reports">
              Set internal delivery estimates and track progress toward company
              goals. Our customisable dashboard helps you build out the reports
              you need to keep key stakeholders informed.
            </ListItem>

            <ListItem number="03" title="Everything you need in one place">
              Stop jumping from one service to another to communicate, store
              files, track tasks and share documents. Manage offers an
              all-in-one team productivity solution.
            </ListItem>
          </List>
        </div>

        <div
          aria-hidden="true"
          className="absolute -top-[36rem] -right-[120%] -z-10 aspect-square min-h-screen w-auto -scale-50 bg-tablet-pattern bg-[bottom_left] bg-no-repeat lg:top-[10rem] lg:-left-[44vw] lg:min-h-[70vh] lg:w-[85%] lg:scale-100"
        ></div>
      </section>

      <section className="carousel py-8 lg:py-16">
        <div className="container">
          <h2 className="mb-16 text-center text-xl font-bold lg:text-left lg:text-2xl">
            What they’ve said
          </h2>
        </div>

        <Carousel />

        <div className="container pt-16 pb-24">
          <button className="button m-auto block bg-managebrightred text-center text-white">
            Get Started
          </button>
        </div>
      </section>

      <section className="cta bg-managebrightred bg-simplify-pattern bg-[100%_auto] bg-[bottom_right_-215px] bg-no-repeat text-white">
        <div className="container py-20">
          <div className="flex flex-col items-center lg:flex-row lg:justify-between">
            <p className="mb-8 text-center text-xl font-bold lg:mb-0 lg:w-5/12 lg:text-left lg:text-2xl">
              Simplify how your team works today.
            </p>
            <button className="button bg-white text-managebrightred hover:bg-white hover:text-managebrightredlight">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
