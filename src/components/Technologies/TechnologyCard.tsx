import { FaStar } from "react-icons/fa";
import type {Itechnology} from "../../types/Technology";

interface TechnologyCardProps {
    technology: Itechnology;
}

const TechnologyCard = ({ technology }: TechnologyCardProps) => {
    return (
        <div className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center">
            <img src={technology.icon} className="h-8 w-8 object-contain" />
          </div>

          <div>
            <h3 className="font-bold text-gray-900">{technology.name}</h3>
          </div>
        </div>

        <span className="shrink-0 rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-500">
          {technology.badge}
        </span>
      </div>

      <p className="mt-4 flex-1 text-sm leading-6 text-gray-500">
        {technology.description}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
          {technology.category}
        </span>

        <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-medium text-violet-600">
          {technology.difficulty}
        </span>

        <div className="flex items-center gap-1 text-sm">
          <FaStar className="text-yellow-400" />

          <span className="font-semibold text-gray-700">
            {technology.rating}
          </span>
        </div>
      </div>

      <button className="mt-4 rounded-md bg-pink-500 px-4 py-2 text-sm font-medium text-white hover:bg-pink-600">
        Add to Stack
      </button>
    </div>
    );
};

export default TechnologyCard;