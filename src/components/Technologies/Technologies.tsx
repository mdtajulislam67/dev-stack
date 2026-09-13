import { useEffect, useState } from "react";
import type { Itechnology } from "../../types/Technology";
import TechnologyCard from "./TechnologyCard";

const Technologies = () => {
  const [technologies, setTechnologies] = useState<Itechnology[]>([]);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-[300px] items-center justify-center">
        {" "}
        <h2 className="text-xl font-semibold text-gray-500">
          {" "}
          Loading technologies...{" "}
        </h2>{" "}
      </div>
    );
  }

  return (
    <section id="technologies" className="bg-gray-50 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto text-left">
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Explore The <span className="brand-gradient">Technologies</span>
          </h2>

          <p className="mt-4 text-sm leading-6 text-gray-500 sm:text-base">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex min-h-[300px] items-center justify-center">
            <div className="flex flex-col items-center gap-3">
              <span className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-pink-500" />

              <p className="text-sm text-gray-500">Loading technologies...</p>
            </div>
          </div>
        )}


        {/* Technologies + Stack */}
        {!loading && (
          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-4">
            {/* Technology Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                {technologies.map((technology) => {
                  return (
                    <TechnologyCard
                      key={technology.id}
                      technology={technology}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Technologies;
