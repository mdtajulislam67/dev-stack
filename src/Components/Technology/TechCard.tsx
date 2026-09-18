import { FaStar } from "react-icons/fa";
import type { Itechnology } from "../../Type/Techology";

interface TechCardProps {
  tech: Itechnology;
  stack: Itechnology[];
  handleAddToStack: (tech: Itechnology) => void;
}

const TechCard = ({ tech, stack, handleAddToStack }: TechCardProps) => {
  const isAdded = stack.some((item) => item.id === tech.id);

  return (
    <article className="card-shadow flex min-h-[258px] flex-col rounded-2xl border border-slate-100 bg-white p-5 transition duration-200 hover:-translate-y-1 hover:border-slate-200">
      <div className="flex items-start justify-between gap-3">
        <div className="grid h-8 w-8">
          <img
            src={tech.icon}
            alt={tech.name}
            className="h-full w-full object-contain"
          />
        </div>
        <span className="rounded-full bg-pink-50 px-3 py-1 text-[12px] font-bold text-pink-600">
          {tech.badge}
        </span>
      </div>

      <h3 className="mt-4 text-[18px] font-extrabold text-slate-800">
        {tech.name}
      </h3>
      <p className="mt-2 line-clamp-3 min-h-[57px] text-[12px] leading-5 text-slate-600">
        {tech.description}
      </p>

      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-[11px] font-semibold text-slate-400">
        <span className="rounded bg-slate-50 px-2 py-1  text-slate-600">{tech.category}</span>
        <span>{tech.difficulty}</span>
        <span className="flex items-center gap-1 text-slate-500">
          <FaStar className="fill-amber-400 text-amber-400" /> {tech.rating}
        </span>
      </div>

      <button
        disabled={isAdded}
        onClick={() => handleAddToStack(tech)}
        className={`mt-3 w-full rounded-lg py-3 text-[12px] font-bold transition ${
          isAdded
            ? "cursor-not-allowed bg-slate-100 text-slate-400"
            : "brand-gradient-bg text-white hover:bg-slate-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </article>
  );
};

export default TechCard;
