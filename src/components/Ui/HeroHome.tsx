import IllustrationIntro from "../../assets/illustration-intro.svg";

const HeroHome = () => {
  return (
    <section className="container lg:py-16">
      <div className="grid items-center gap-5 text-center md:auto-cols-fr md:grid-flow-col lg:text-left">
        <div className="order-2 pt-8 md:order-1 md:pt-0">
          <h1 className="mb-9 text-xl font-bold lg:text-2xl">
            Bring everyone together to build better products.
          </h1>
          <p className="text lg:w-7/12">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <button className="button bg-managebrightred text-white">
            Get Started
          </button>
        </div>

        <div className="order-1 flex justify-center md:order-2 md:justify-end">
          <img
            className="scale-[1.08]"
            src={IllustrationIntro}
            alt="illustration-intro"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
