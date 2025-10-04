import React from 'react';
import img1 from '../assets/Parts/blog1.png';
import img2 from '../assets/Parts/blog2.png';
import img3 from '../assets/Parts/blog3.png';

const blogData = [
  {
    img: img1,
    name: 'Name',
    date: 'Date',
    title: 'How the maruti Invicto is a lesson in brand building......',
  },
  {
    img: img2,
    name: 'Name',
    date: 'Date',
    title: 'How the maruti Invicto is a lesson in brand building......',
  },
  {
    img: img3,
    name: 'Name',
    date: 'Date',
    title: 'How the maruti Invicto is a lesson in brand building......',
  },
];

const BlogSection = () => {
  return (
    <div className="py-16 px-6 md:px-20 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-3">Latest News & Articles from the Blog</h2>
      <p className="text-sm text-gray-600 max-w-2xl mx-auto mb-12">
        Frequently asked questions ordered by popularity. Remember that if the visitor has not committed to the call to action, they may still have questions (doubts) that can be answered.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {blogData.map((blog, index) => (
          <div key={index} className="relative">
            <img src={blog.img} alt="blog" className="w-full h-60 object-cover rounded-md" />
            <div className="absolute left-4 right-4 -bottom-10 bg-white shadow-lg rounded-md p-4 text-left">
              <div className="flex justify-between text-sm text-gray-500 mb-1">
                <span>{blog.name}</span>
                <span>{blog.date}</span>
              </div>
              <h4 className="text-sm font-semibold mb-2">{blog.title}</h4>
              <a href="#" className="text-sm text-blue-500 hover:underline">Read more</a>
            </div>
          </div>
        ))}
      </div>

      {/* Add padding at the bottom to avoid overlap */}
      <div className="mt-20"></div>
    </div>
  );
};

export default BlogSection;
