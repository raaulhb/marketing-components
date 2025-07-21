import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TestimonialCard } from "@/components/marketing/testimonial-card";

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl px-4 py-20 mx-auto">
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-6xl font-bold text-gray-900">
            Marketing Components
          </h1>
          <p className="mb-8 text-xl text-gray-600">
            Professional React components for your marketing needs
          </p>
          <Link to="/components">
            <Button size="lg">Browse Components</Button>
          </Link>
        </div>

        {/* Preview do componente */}
        <div className="text-center">
          <h2 className="mb-8 text-2xl font-bold text-gray-900">Preview</h2>
          <div className="flex justify-center">
            <TestimonialCard
              name="Sarah Johnson"
              username="sarahj"
              testimonial="This product has completely transformed how we work!"
              profileImage="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
