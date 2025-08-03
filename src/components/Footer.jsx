export default function Footer() {
  return (
    <footer className="bg-eerieBlack text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} IdeaBox. All rights reserved.</p>
        <p className="mt-2">
          Built with 💡 using React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
