import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="text-xl font-bold text-gray-900"
          >
            Marketing Components
          </Link>

          <div className="flex space-x-4">
            <Link to="/">
              <Button
                variant={location.pathname === "/" ? "default" : "ghost"}
                size="sm"
              >
                Home
              </Button>
            </Link>
            <Link to="/components">
              <Button
                variant={
                  location.pathname === "/components" ? "default" : "ghost"
                }
                size="sm"
              >
                Components
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
