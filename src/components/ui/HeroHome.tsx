import IllustrationIntro from "../../assets/illustration-intro.svg";

const HeroHome = () => {
  return (
    <section className="container py-16">
      <div className="grid items-center gap-5 md:auto-cols-fr md:grid-flow-col">
        <div>
          <h1 className="mb-9 font-bold md:text-lg lg:text-2xl">
            Bring everyone together to build better products.
          </h1>
          <p className="text w-7/12">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <button className="button bg-managebrightred text-white">
            Get Started
          </button>
        </div>

        <div className="flex justify-end">
          <img src={IllustrationIntro} alt="illustration-intro" />
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
