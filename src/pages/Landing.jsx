import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="bg-magnolia text-eerieBlack">
      {/* Hero */}
      <section className="bg-indigoLavender text-deepViolet py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to IdeaBox</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Capture, organize, and grow your ideas — one thought at a time.
        </p>
        <Link to="/ideas">
          <button className="mt-8 bg-lavender text-deepViolet px-6 py-3 rounded-lg font-semibold hover:bg-violet hover:text-white transition">
            Get Started
          </button>
        </Link>
      </section>

      {/* Features */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-deepViolet">Why Choose IdeaBox?</h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            { title: "Quick Capture", desc: "Log thoughts in seconds with an intuitive UI." },
            { title: "Smart Tags", desc: "Categorize by type, status, and more." },
            { title: "Local Storage", desc: "Your data stays safe on your browser." },
            { title: "Beautiful UI", desc: "Minimal, responsive, and aesthetic design." },
          ].map(({ title, desc }, i) => (
            <div key={i} className="bg-white shadow-md p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-violet">{title}</h3>
              <p className="text-sm text-gray-700">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12 text-deepViolet">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
          {[
            { title: "Add Your Idea", step: "1" },
            { title: "Organize by Category", step: "2" },
            { title: "Track & Update", step: "3" },
          ].map(({ title, step }, i) => (
            <div key={i} className="bg-magnolia p-6 rounded-lg shadow">
              <span className="block text-violet text-4xl font-bold mb-2">{step}</span>
              <h4 className="text-lg font-semibold text-deepViolet">{title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-lavender text-deepViolet text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">Ready to turn ideas into action?</h2>
        <Link to="/new">
          <button className="mt-4 bg-white text-deepViolet font-bold px-6 py-3 rounded hover:bg-magnolia transition">
            Create Your First Idea
          </button>
        </Link>
      </section>
    </div>
  );
}
