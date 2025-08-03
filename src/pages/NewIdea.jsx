import IdeaForm from "../components/IdeaForm";

export default function NewIdea() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6 text-deepViolet">Add a New Idea</h1>
      <IdeaForm />
    </div>
  );
}
