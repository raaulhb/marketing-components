import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialCardProps {
  name: string;
  username: string;
  testimonial: string;
  profileImage?: string;
  variant?: "default" | "compact" | "featured";
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  username,
  testimonial,
  profileImage,
  variant = "default",
  className = "",
}) => {
  // Generate initials for fallback
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase())
      .join("")
      .slice(0, 2);
  };

  // Truncate long text with ellipsis
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + "...";
  };

  const cardVariants = {
    default: "max-w-md",
    compact: "max-w-sm",
    featured: "max-w-lg",
  };

  const avatarSizes = {
    default: "h-12 w-12",
    compact: "h-10 w-10",
    featured: "h-16 w-16",
  };

  return (
    <Card
      className={`${cardVariants[variant]} bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 ${className}`}
      role="article"
      aria-label={`Testimonial from ${name}`}
    >
      <CardContent className="p-6">
        {/* Header with profile info */}
        <div className="flex items-start gap-4 mb-4">
          <Avatar className={`${avatarSizes[variant]} flex-shrink-0`}>
            <AvatarImage
              src={profileImage}
              alt={`Profile picture of ${name}`}
              className="object-cover"
              loading="lazy"
            />
            <AvatarFallback
              className="font-semibold text-white bg-gradient-to-br from-blue-500 to-purple-600"
              aria-label={`${name}'s initials`}
            >
              {getInitials(name)}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1 min-w-0">
            <h3
              className="text-lg font-semibold leading-tight text-gray-900 truncate"
              title={name}
            >
              {name}
            </h3>
            <p
              className="text-sm text-gray-500 truncate"
              title={`@${username}`}
            >
              @{username}
            </p>
          </div>
        </div>

        {/* Testimonial content */}
        <blockquote className="relative">
          <div
            className="text-base leading-relaxed text-gray-700 break-words"
            style={{ wordWrap: "break-word", overflowWrap: "break-word" }}
          >
            "{testimonial}"
          </div>
        </blockquote>
      </CardContent>
    </Card>
  );
};
// Example usage with different variants and test cases
const TestimonialShowcase = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      username: "sarahj",
      testimonial:
        "This product has completely transformed how we work. The intuitive design and powerful features make complex tasks feel effortless.",
      profileImage:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Michael Chen",
      username: "mchen_dev",
      testimonial:
        "Outstanding customer service and an incredible user experience. I've never been happier with a software solution.",
      profileImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Dr. Emily Rodriguez-Williams",
      username: "very_long_username_that_should_be_truncated_properly",
      testimonial:
        "As a researcher who deals with massive datasets daily, I can confidently say this tool has revolutionized my workflow. The performance is incredible, even with complex analyses that used to take hours. The interface is intuitive enough for my students to learn quickly, yet powerful enough for my most advanced research projects. I particularly appreciate the attention to detail in the data visualization features and the seamless collaboration tools that allow my entire team to work together efficiently.",
      profileImage:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
    },
  ];

  return (
    <div className="min-h-screen px-4 py-12 bg-gray-50">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Customer Testimonials
          </h1>
          <p className="text-lg text-gray-600">
            See what our customers have to say
          </p>
        </div>

        {/* Default variant */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Default Variant
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {testimonials.slice(0, 2).map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                username={testimonial.username}
                testimonial={testimonial.testimonial}
                profileImage={testimonial.profileImage}
              />
            ))}
          </div>
        </div>

        {/* Featured variant with long content */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Featured Variant (Long Content Test)
          </h2>
          <div className="flex justify-center">
            <TestimonialCard
              name={testimonials[2].name}
              username={testimonials[2].username}
              testimonial={testimonials[2].testimonial}
              profileImage={testimonials[2].profileImage}
              variant="featured"
            />
          </div>
        </div>

        {/* Compact variant */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Compact Variant
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                username={testimonial.username}
                testimonial={testimonial.testimonial}
                profileImage={testimonial.profileImage}
                variant="compact"
              />
            ))}
          </div>
        </div>

        {/* Accessibility and edge case tests */}
        <div className="mt-12">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Edge Cases & Accessibility
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {/* No image test */}
            <TestimonialCard
              name="Alex Thompson"
              username="alex_t"
              testimonial="Great product with excellent support!"
              variant="default"
            />

            {/* Very long name */}
            <TestimonialCard
              name="Dr. Alexandria Bartholomew-Richardson III"
              username="very_very_long_username_that_tests_truncation"
              testimonial="This is a testimonial with a very long name and username to test the truncation functionality."
              variant="default"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialShowcase;
