import { FaX } from "react-icons/fa6";
import type { Itechnology } from "../../Type/Techology";

interface SidebarProps {
  stack: Itechnology[];
  handleRemoveFromStack: (id: string) => void;
  handleRemoveAll: () => void;
}

const Sidebar = ({
  stack,
  handleRemoveFromStack,
  handleRemoveAll,
}: SidebarProps) => {
  return (
    <aside className="stack-shadow h-fit rounded-2xl border border-slate-100 bg-white p-4 lg:sticky lg:top-24">
      <h2 className="text-[16px] font-extrabold text-slate-800">Your Stack</h2>
      <p className="mt-1 text-[10px] text-slate-400">
        {stack.length === 0
          ? "No technology selected yet."
          : `${stack.length} ${stack.length === 1 ? "Technology" : "Technologies"} Selected`}
      </p>

      {stack.length === 0 ? (
        <div className="mt-6 grid min-h-28 place-items-center rounded-xl border border-dashed border-slate-200 text-center text-xs text-slate-400">
          Your stack is empty.
        </div>
      ) : (
        <div className="mt-5 space-y-2">
          {stack.map((tech) => (
            <div
              key={tech.id}
              className="flex items-center gap-3 rounded-xl border border-slate-200 p-2.5"
            >
              <div className="grid h-8 w-8 shrink-0">
                <img
                  src={tech.icon}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[11px] font-bold text-slate-700">
                  {tech.name}
                </p>
                <p className="text-[8px] text-slate-400">{tech.category}</p>
              </div>
              <button
                onClick={() => handleRemoveFromStack(tech.id)}
                aria-label={`Remove ${tech.name}`}
                className="rounded p-1.5 text-slate-400 hover:bg-slate-50 hover:text-pink-600"
              >
                <FaX size={16} />
              </button>
            </div>
          ))}
        </div>
      )}

      <button
        disabled={stack.length === 0}
        onClick={handleRemoveAll}
        className="mt-6 w-full rounded-lg border border-red-200 py-2.5 text-[11px] font-bold text-red-500 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Remove All
      </button>
    </aside>
  );
};

export default Sidebar;
