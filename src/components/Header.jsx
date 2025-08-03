import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-indigoLavender text-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-magnolia">
          IdeaBox
        </Link>
        <nav className="flex gap-5 text-sm md:text-base">
          <NavLink to="/" className="hover:text-magnolia">Home</NavLink>
          <NavLink to="/ideas" className="hover:text-magnolia">Ideas</NavLink>
          <NavLink to="/new" className="hover:text-magnolia">New Idea</NavLink>
          <NavLink to="/about" className="hover:text-magnolia">About</NavLink>
        </nav>
      </div>
    </header>
  );
}
