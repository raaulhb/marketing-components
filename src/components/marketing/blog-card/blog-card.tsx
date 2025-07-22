import React from "react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  imageUrl: string;
  imageAlt: string;
  badge?: string;
  buttonText?: string;
  buttonUrl?: string;
  className?: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({
  title,
  excerpt,
  imageUrl,
  imageAlt,
  badge,
  buttonText = "Read more",
  buttonUrl = "#",
  className = "",
}) => {
  return (
    <div
      className={`w-[340px] bg-white shadow-lg border border-gray-200 rounded-lg overflow-hidden ${className}`}
    >
      {/* Image */}
      <div>
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-[300px] object-cover"
          loading="lazy"
        />
      </div>
      {/* Content */}
      <div className="p-6">
        {/* Badge */}
        {badge && (
          <span className="inline-block px-3 py-1 mb-3 text-sm font-medium text-green-700 bg-green-100 rounded-full">
            {badge}
          </span>
        )}
        <h3 className="mb-2 text-lg font-semibold leading-tight text-gray-900 line-clamp-2">
          {title}
        </h3>

        <p className="text-sm leading-relaxed text-gray-600 line-clamp-2">
          {excerpt}
        </p>

        <a
          href={buttonUrl}
          className="inline-flex items-center mt-4 text-sm font-medium text-blue-600 rounded-md hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {buttonText}
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};
