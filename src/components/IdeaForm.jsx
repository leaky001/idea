import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useIdeaContext } from "../context/IdeaContext";
import { categories } from "../utils/categories";

export default function IdeaForm({ editing = false, existingIdea }) {
  const [form, setForm] = useState(
    existingIdea || {
      title: "",
      description: "",
      category: "App",
      status: "Saved",
    }
  );

  const { addIdea, updateIdea } = useIdeaContext();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editing) {
      updateIdea(form);
    } else {
      addIdea({ ...form, id: Date.now().toString(), createdAt: new Date().toISOString() });
    }
    navigate("/ideas");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto mt-6">
      <input
        type="text"
        name="title"
        placeholder="Idea title"
        value={form.title}
        onChange={handleChange}
        required
        className="w-full border p-2 rounded"
      />
      <textarea
        name="description"
        placeholder="Describe your idea..."
        rows="4"
        value={form.description}
        onChange={handleChange}
        required
        className="w-full border p-2 rounded"
      ></textarea>
      <div className="flex flex-wrap gap-4">
        <select name="category" value={form.category} onChange={handleChange} className="p-2 border rounded">
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
        <select name="status" value={form.status} onChange={handleChange} className="p-2 border rounded">
          <option>Saved</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>
      </div>
      <button className="bg-lavender text-white px-5 py-2 rounded hover:opacity-90">
        {editing ? "Update Idea" : "Save Idea"}
      </button>
    </form>
  );
}
