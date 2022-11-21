import IllustrationIntro from "../assets/illustration-intro.svg";

const Home = () => {
  return (
    <>
      <section className="container py-16">
        <div className="grid items-center gap-5 md:auto-cols-fr md:grid-flow-col">
          <div>
            <h1 className="mb-9 font-bold md:text-lg lg:text-xl xl:text-2xl">
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

      <section className="container py-16">
        <div className="grid gap-5 md:auto-cols-fr md:grid-flow-col">
          <div>
            <h2 className="mb-9 font-bold md:text-base lg:text-lg xl:text-xl">
              What´s different about Manage?
            </h2>
            <p className="text w-7/12">
              Manage provides all the functionality your team needs, without the
              complexity. Our software is tailor-made for modern digital product
              teams.
            </p>
          </div>

          <div>
            <ul role="list">
              <li>
                <h3 className="mb-5 font-bold md:text-sm lg:text-base xl:text-lg">
                  Track company-wide progress
                </h3>
                <p className="text">
                  See how your day-to-day tasks fit into the wider vision. Go
                  from tracking progress at the milestone level all the way done
                  to the smallest of details. Never lose sight of the bigger
                  picture again.
                </p>
              </li>
              <li>
                <h3 className="mb-5 font-bold md:text-sm lg:text-base xl:text-lg">
                  Advanced built-in reports
                </h3>

                <p className="text">
                  Set internal delivery estimates and track progress toward
                  company goals. Our customisable dashboard helps you build out
                  the reports you need to keep key stakeholders informed.
                </p>
              </li>
              <li>
                <h3 className="mb-5 font-bold md:text-sm lg:text-base xl:text-lg">
                  Everything you need in one place
                </h3>
                <p className="text">
                  Stop jumping from one service to another to communicate, store
                  files, track tasks and share documents. Manage offers an
                  all-in-one team productivity solution.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="carousel py-16">
        <div className="container">
          <h2 className="mb-9 text-center font-bold md:text-base lg:text-lg xl:text-xl">
            What they’ve said
          </h2>
        </div>

        <div className="container">
          <button className="button m-auto block bg-managebrightred text-center text-white">
            Get Started
          </button>
        </div>
      </section>

      <section className="cta bg-managebrightred text-white">
        <div className="container py-16">
          <div className="flex items-center justify-between">
            <p className="w-5/12 font-semibold md:text-base lg:text-lg xl:text-xl">
              Simplify how your team works today.
            </p>
            <button className="button bg-white text-managebrightred">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
