import type { Itechnology } from "../../Type/Techology";
import TechList from "./TechList";
import Sidebar from "./Sidebar";

interface TechnologiesProps {
  technologies: Itechnology[];
  stack: Itechnology[];
  loading: boolean;
  handleAddToStack: (tech: Itechnology) => void;
  handleRemoveFromStack: (id: string) => void;
  handleRemoveAll: () => void;
}

const Technologies = ({
  technologies,
  stack,
  loading,
  handleAddToStack,
  handleRemoveFromStack,
  handleRemoveAll,
}: TechnologiesProps) => {
  return (
    <section
      id="technologies"
      className="container mx-auto scroll-mt-20 px-5 pb-24 pt-10"
    >
      <div className="mb-8">
        <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
          Explore the <span className="brand-gradient">Technologies</span>
        </h2>
        <p className="mt-2 text-sm text-slate-400">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[minmax(0,1fr)_270px] lg:items-start">
        <TechList
          technologies={technologies}
          stack={stack}
          loading={loading}
          handleAddToStack={handleAddToStack}
        />
        <Sidebar
          stack={stack}
          handleRemoveFromStack={handleRemoveFromStack}
          handleRemoveAll={handleRemoveAll}
        />
      </div>
    </section>
  );
};

export default Technologies;
