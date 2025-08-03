export default function IdeaFilter({ filters, setFilters }) {
  const categories = ["All", "App", "Business", "Story", "Quote"];
  const statuses = ["All", "Saved", "In Progress", "Completed"];

  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <select
        className="px-3 py-2 border rounded"
        value={filters.category}
        onChange={(e) => setFilters({ ...filters, category: e.target.value })}
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      <select
        className="px-3 py-2 border rounded"
        value={filters.status}
        onChange={(e) => setFilters({ ...filters, status: e.target.value })}
      >
        {statuses.map((status) => (
          <option key={status} value={status}>{status}</option>
        ))}
      </select>
    </div>
  );
}
