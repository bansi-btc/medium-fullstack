import React from "react";
import BlogCard from "../components/Blogs/BlogCard";

type TBlog = {
  author?: string;
  title?: string;
  content?: string;
  published?: boolean;
  date?: string;
  readtime?: number;
};

const BlogsPage = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center ">
      <div className="max-w-4xl w-full flex flex-col items-center justify-start pt-10 gap-14">
        <div className="flex flex-row gap-8 pb-2 border-b justify-start w-full">
          <div>+</div>
          <div>For you</div>
          <div>Following</div>
        </div>

        <div className="w-full justify-start flex flex-col gap-12">
          <BlogCard
            author="Peter V"
            date="Dec 3 2023"
            title="How an ugly Single-Page website make $5000 a month with affiliate marketing"
            description="No need to create a fancy and modern website with hundreds of pages to make money online is the dream for many..."
            category="Side Hustle"
            readTime="3 min"
          />
          <BlogCard
            author="Peter V"
            date="Dec 3 2023"
            title="How an ugly Single-Page website make $5000 a month with affiliate marketing"
            description="No need to create a fancy and modern website with hundreds of pages to make money online is the dream for many..."
            category="Side Hustle"
            readTime="3 min"
          />
          <BlogCard
            author="Peter V"
            date="Dec 3 2023"
            title="How an ugly Single-Page website make $5000 a month with affiliate marketing"
            description="No need to create a fancy and modern website with hundreds of pages to make money online is the dream for many..."
            category="Side Hustle"
            readTime="3 min"
          />
          <BlogCard
            author="Peter V"
            date="Dec 3 2023"
            title="How an ugly Single-Page website make $5000 a month with affiliate marketing"
            description="No need to create a fancy and modern website with hundreds of pages to make money online is the dream for many..."
            category="Side Hustle"
            readTime="3 min"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
