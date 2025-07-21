import { TestimonialCard } from "@/components/marketing/testimonial-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const ComponentsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-4 py-12 mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            All Components
          </h1>
          <p className="text-lg text-gray-600">
            Browse our collection of marketing components
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Testimonial Card - Pronto */}
          <Card className="transition-shadow hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">Testimonial Card</CardTitle>
              <p className="text-sm text-gray-600">
                Display customer testimonials with style
              </p>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <TestimonialCard
                  name="John Doe"
                  username="johndoe"
                  testimonial="Amazing component!"
                />
              </div>
              <span className="px-2 py-1 text-sm text-green-800 bg-green-100 rounded-full">
                ✅ Ready
              </span>
            </CardContent>
          </Card>

          {/* Futuros componentes */}
          <Card className="opacity-60">
            <CardHeader>
              <CardTitle className="text-xl">Hero Section</CardTitle>
              <p className="text-sm text-gray-600">Coming soon...</p>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center h-32 mb-4 text-gray-500 bg-gray-100 rounded-lg">
                Coming Soon
              </div>
              <span className="px-2 py-1 text-sm text-yellow-800 bg-yellow-100 rounded-full">
                🚧 In Progress
              </span>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
