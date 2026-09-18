import type { Itechnology } from "../../Type/Techology";
import TechCard from "./TechCard";

interface TechListProps {
  technologies: Itechnology[];
  stack: Itechnology[];
  loading: boolean;
  handleAddToStack: (tech: Itechnology) => void;
}

const TechList = ({
  technologies,
  stack,
  loading,
  handleAddToStack,
}: TechListProps) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-[258px] animate-pulse rounded-2xl border border-slate-100 bg-slate-50"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {technologies.map((tech) => (
        <TechCard
          key={tech.id}
          tech={tech}
          stack={stack}
          handleAddToStack={handleAddToStack}
        />
      ))}
    </div>
  );
};

export default TechList;
