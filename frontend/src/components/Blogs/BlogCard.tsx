import React from "react";
import { Bookmark, MoreHorizontal } from "lucide-react";

interface CardProps {
  author: string;
  date: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
}

const BlogCard: React.FC<CardProps> = ({
  author,
  date,
  title,
  description,
  category,
  readTime,
}) => {
  return (
    <div className="max-w-3xl">
      <div className="flex items-center space-x-2 text-sm text-gray-600">
        <span className="font-semibold text-gray-900">{author}</span>
        <span>·</span>
        <span>{date}</span>
        <span className="text-yellow-500">⭐ Member-only</span>
      </div>
      <h2 className="mt-2 text-xl font-bold text-gray-900">{title}</h2>
      <p className="mt-1 text-gray-700">{description}</p>
      <div className="mt-6 flex items-center space-x-2 text-gray-600 text-sm">
        <span className="px-2 py-1 bg-gray-200 rounded-full text-gray-800">
          {category}
        </span>
        <span>{readTime} read</span>
      </div>
      <div className="mt-3 flex justify-between items-center text-gray-500">
        <Bookmark className="w-5 h-5" />
        <MoreHorizontal className="w-5 h-5" />
      </div>
    </div>
  );
};

export default BlogCard;
