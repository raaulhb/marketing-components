import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "@/components/navigation";
import { HomePage } from "@/pages/HomePage";
import { ComponentsPage } from "@/pages/ComponentsPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/components"
            element={<ComponentsPage />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
