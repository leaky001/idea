import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-3xl font-bold text-deepViolet">Welcome to Your Idea Dashboard</h1>
      <p className="mt-4 text-gray-600">Manage your creativity, track your progress, and never lose a great idea again.</p>
      <Link to="/ideas" className="mt-6 bg-lavender text-white px-5 py-3 rounded hover:opacity-90">
        Go to Idea Board
      </Link>
    </div>
  );
}
