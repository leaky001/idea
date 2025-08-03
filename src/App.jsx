import { IdeaProvider } from "./context/IdeaContext"; // ✅ make sure the path is correct
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import IdeaBoard from "./pages/IdeaBoard";
import NewIdea from "./pages/NewIdea";
import IdeaDetails from "./pages/IdeaDetails";
import About from "./pages/About";
import NotFound from "./components/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <IdeaProvider> {/* ✅ Wrap the entire app */}
      <div className="bg-magnolia min-h-screen text-eerieBlack">
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/ideas" element={<IdeaBoard />} />
          <Route path="/ideas/:id" element={<IdeaDetails />} />
          <Route path="/new" element={<NewIdea />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </IdeaProvider>
  );
}
