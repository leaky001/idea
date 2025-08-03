import { Link } from "react-router-dom";

export default function IdeaCard({ idea }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-4 hover:shadow-xl transition duration-300">
      <h2 className="text-xl font-semibold text-deepViolet">{idea.title}</h2>
      <p className="text-sm text-gray-600 mt-1">{idea.description.slice(0, 80)}...</p>
      <div className="mt-3 flex justify-between items-center text-xs text-gray-500">
        <span className="bg-indigoLavender text-white px-2 py-1 rounded">
          {idea.category}
        </span>
        <span>{idea.status}</span>
      </div>
      <Link
        to={`/ideas/${idea.id}`}
        className="block mt-4 text-indigoLavender font-medium hover:underline text-sm"
      >
        View Details →
      </Link>
    </div>
  );
}
