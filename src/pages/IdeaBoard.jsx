import { useIdeaContext } from "../context/IdeaContext";
import { useState } from "react";
import IdeaCard from "../components/IdeaCard";
import IdeaFilter from "../components/IdeaFilter";

export default function IdeaBoard() {
  const { ideas } = useIdeaContext();
  const [filters, setFilters] = useState({ category: "All", status: "All" });

  const filtered = ideas.filter((idea) => {
    const categoryMatch = filters.category === "All" || idea.category === filters.category;
    const statusMatch = filters.status === "All" || idea.status === filters.status;
    return categoryMatch && statusMatch;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-4 text-deepViolet">Your Ideas</h1>
      <IdeaFilter filters={filters} setFilters={setFilters} />
      {filtered.length ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((idea) => (
            <IdeaCard key={idea.id} idea={idea} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 mt-8">No ideas found. Try changing your filters.</p>
      )}
    </div>
  );
}
