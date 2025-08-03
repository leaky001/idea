import { useParams } from "react-router-dom";
import { useIdeaContext } from "../context/IdeaContext";
import IdeaForm from "../components/IdeaForm";

export default function IdeaDetails() {
  const { id } = useParams();
  const { ideas, deleteIdea } = useIdeaContext();
  const idea = ideas.find((i) => i.id === id);

  if (!idea) {
    return <p className="text-center py-10 text-red-500">Idea not found.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-4 text-deepViolet">{idea.title}</h1>
      <p className="text-gray-700 mb-4">{idea.description}</p>
      <div className="flex flex-wrap gap-4 mb-6">
        <span className="bg-indigoLavender text-white px-3 py-1 rounded">{idea.category}</span>
        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded">{idea.status}</span>
      </div>
      <h2 className="text-lg font-semibold mb-2">Edit Idea</h2>
      <IdeaForm editing existingIdea={idea} />
      <button
        onClick={() => {
          deleteIdea(idea.id);
          window.location.href = "/ideas";
        }}
        className="mt-6 bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600"
      >
        Delete Idea
      </button>
    </div>
  );
}
