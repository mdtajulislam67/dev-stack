import heroImage from "../../assets/banner-stack.png";

const Hero = () => {
  return (
    <section className="overflow-hidden bg-white">
      <div className="container mx-auto px-4">
        <div className="grid min-h-[560px] grid-cols-1 items-center gap-10 py-12 md:py-16 lg:grid-cols-2 lg:gap-16">
          <div className="text-center lg:text-left">
            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Build Your Ideal
              <span className="brand-gradient block">Development Stack</span>
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-gray-500 sm:text-base lg:mx-0">
              Explore frontend, backend, database, and tooling options, compare
              them side by side, and put together the stack that fits your next
              project.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <a
                href="#technologies"
                className="brand-gradient-bg flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white"
              >
                Explore Technologies
              </a>

              <a
                href="#"
                className="rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src={heroImage}
              className="w-full max-w-md object-contain sm:max-w-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
