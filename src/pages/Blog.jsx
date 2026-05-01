import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentBlog, setCurrentBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [progress, setProgress] = useState(0);
  const contentRef = useRef(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      fetchSingleBlog();
    } else {
      fetchAllBlogs();
    }
  }, [slug]);

  useEffect(() => {
    if (!slug && currentBlog) {
      const handleScroll = () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        setProgress(scrolled);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [slug, currentBlog]);

  const fetchAllBlogs = async () => {
    try {
      const response = await API.get("/blogs");
      setBlogs(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setLoading(false);
    }
  };

  const fetchSingleBlog = async () => {
    try {
      const response = await API.get(`/blogs/slug/${slug}`);
      setCurrentBlog(response.data);
      await API.post(`/blogs/${response.data._id}/view`);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching blog:", error);
      setLoading(false);
    }
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = currentBlog?.title;
    
    const shareUrls = {
      whatsapp: `https://wa.me/?text=${encodeURIComponent(title + ' - ' + url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
    };
    
    window.open(shareUrls[platform], '_blank', 'width=600,height=400');
  };

  const allTags = [...new Set(blogs.flatMap((b) => b.tags || []))];

  const filteredBlogs = blogs.filter((blog) => {
    const search = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                   blog.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                   blog.author.toLowerCase().includes(searchTerm.toLowerCase());
    const tagMatch = selectedTag ? (blog.tags || []).includes(selectedTag) : true;
    return search && tagMatch;
  });

  const BlogCard = ({ blog }) => (
    <div
      onClick={() => navigate(`/blog/${blog.slug}`)}
      className="group cursor-pointer bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      {blog.imageUrl && (
        <div className="overflow-hidden h-56">
          <img
            src={blog.imageUrl}
            alt={blog.title}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />
        </div>
      )}
      <div className="p-8">
        <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
          <span>{blog.author}</span>
          <span>•</span>
          <span>{new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
          <span>•</span>
          <span>{blog.readingTime || Math.ceil(blog.content.replace(/<[^>]*>/g, '').split(/\s+/).length / 200)} min read</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition line-clamp-2">
          {blog.title}
        </h2>
        <p className="text-gray-600 line-clamp-3 leading-relaxed">
          {blog.content.replace(/<[^>]*>/g, '').substring(0, 150)}...
        </p>
        {blog.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {blog.tags.slice(0, 3).map((tag, i) => (
              <span
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedTag(tag);
                }}
                className="text-sm text-gray-500 hover:text-blue-600 transition"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  const SingleBlogView = () => {
    if (!currentBlog) return null;

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = currentBlog.content;
    const firstParagraph = tempDiv.querySelector('p');
    if (firstParagraph) {
      firstParagraph.classList.add('drop-cap');
    }

    // Social Share Icons Component
    const SocialShareButtons = ({ isMobile = false }) => (
      <div className={isMobile ? "flex justify-center gap-4" : "flex flex-col gap-3"}>
        {/* WhatsApp */}
        <button
          onClick={() => handleShare('whatsapp')}
          className={`group relative overflow-hidden transition-all duration-300 ${
            isMobile 
              ? "flex-1 py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 bg-[#25D366] text-white hover:shadow-lg hover:scale-105" 
              : "p-3 rounded-xl bg-[#25D366] text-white hover:shadow-lg hover:scale-110"
          }`}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.562 1.098 3.677l-1.267 3.881 3.967-1.227c1.033.565 2.221.864 3.426.864 3.181 0 5.767-2.586 5.768-5.766.001-3.18-2.585-5.767-5.766-5.768h-.458zm0 10.398c-1.022 0-2.018-.284-2.873-.82l-2.182.674.752-2.092c-.549-.883-.841-1.905-.84-2.943.001-2.587 2.105-4.692 4.692-4.693h.354c2.586 0 4.691 2.105 4.692 4.691 0 2.587-2.105 4.692-4.691 4.693h-.354z"/>
            <path d="M19.077 4.928c-2.104-2.105-4.903-3.262-7.873-3.262-6.104 0-11.071 4.967-11.072 11.07 0 1.964.518 3.883 1.504 5.568l-1.567 4.826 4.929-1.524c1.618.941 3.453 1.44 5.333 1.44 6.104 0 11.071-4.967 11.072-11.07 0-2.97-1.157-5.769-3.263-7.873l-.073-.075zm-7.873 17.617c-1.664 0-3.293-.438-4.714-1.266l-.337-.2-2.988.924.956-2.924-.221-.348c-.937-1.473-1.433-3.172-1.432-4.907.001-5.269 4.285-9.553 9.554-9.554 2.55 0 4.945.994 6.747 2.796 1.802 1.802 2.795 4.197 2.795 6.747 0 5.269-4.285 9.554-9.553 9.555h-.007z"/>
          </svg>
          {isMobile && <span>WhatsApp</span>}
          {!isMobile && (
            <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 opacity-20"></span>
          )}
        </button>

        {/* LinkedIn */}
        <button
          onClick={() => handleShare('linkedin')}
          className={`group relative overflow-hidden transition-all duration-300 ${
            isMobile 
              ? "flex-1 py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 bg-[#0077B5] text-white hover:shadow-lg hover:scale-105" 
              : "p-3 rounded-xl bg-[#0077B5] text-white hover:shadow-lg hover:scale-110"
          }`}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.204 0 22.225 0z"/>
          </svg>
          {isMobile && <span>LinkedIn</span>}
          {!isMobile && (
            <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 opacity-20"></span>
          )}
        </button>

        {/* Twitter/X */}
        <button
          onClick={() => handleShare('twitter')}
          className={`group relative overflow-hidden transition-all duration-300 ${
            isMobile 
              ? "flex-1 py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 bg-[#000000] text-white hover:shadow-lg hover:scale-105" 
              : "p-3 rounded-xl bg-[#000000] text-white hover:shadow-lg hover:scale-110"
          }`}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          {isMobile && <span>Twitter</span>}
          {!isMobile && (
            <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 opacity-20"></span>
          )}
        </button>

        {/* Facebook */}
        <button
          onClick={() => handleShare('facebook')}
          className={`group relative overflow-hidden transition-all duration-300 ${
            isMobile 
              ? "flex-1 py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 bg-[#1877F2] text-white hover:shadow-lg hover:scale-105" 
              : "p-3 rounded-xl bg-[#1877F2] text-white hover:shadow-lg hover:scale-110"
          }`}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          {isMobile && <span>Facebook</span>}
          {!isMobile && (
            <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 opacity-20"></span>
          )}
        </button>
      </div>
    );

    return (
      <>
        {/* Reading Progress Bar */}
        <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
          <div className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300" style={{ width: `${progress}%` }}></div>
        </div>

        <article className="pt-32 pb-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            {/* Hero Section */}
            <header className="mb-12 text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {currentBlog.title}
              </h1>
              
              <div className="flex items-center justify-center gap-4 text-gray-600 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {currentBlog.author.charAt(0).toUpperCase()}
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">{currentBlog.author}</div>
                    <div className="text-sm">
                      {new Date(currentBlog.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                      {' • '}
                      {currentBlog.readingTime || Math.ceil(currentBlog.content.replace(/<[^>]*>/g, '').split(/\s+/).length / 200)} min read
                    </div>
                  </div>
                </div>
              </div>
            </header>

            {/* Featured Image */}
            {currentBlog.imageUrl && (
              <div className="mb-12">
                <img
                  src={currentBlog.imageUrl}
                  alt={currentBlog.title}
                  className="w-full rounded-xl shadow-lg"
                />
                <p className="text-center text-sm text-gray-500 mt-3">
                  {currentBlog.title}
                </p>
              </div>
            )}

            {/* Share Buttons - Sticky on desktop */}
            <div className="lg:fixed lg:left-8 lg:top-1/2 lg:-translate-y-1/2 hidden lg:block">
              <div className="bg-white rounded-2xl shadow-lg p-3 border border-gray-100">
                <SocialShareButtons isMobile={false} />
              </div>
            </div>

            {/* Blog Content */}
            <div 
              ref={contentRef}
              className="blog-content prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: currentBlog.content }}
            />

            {/* Tags */}
            {currentBlog.tags?.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {currentBlog.tags.map((tag, i) => (
                    <span
                      key={i}
                      onClick={() => navigate('/blog')}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 cursor-pointer transition"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

           
           

            {/* CTA Section */}
           \
          </div>
        </article>

        <style jsx>{`
          .blog-content h1 {
            font-size: 2.5rem;
            font-weight: 700;
            margin-top: 2rem;
            margin-bottom: 1rem;
          }
          .blog-content h2 {
            font-size: 1.875rem;
            font-weight: 600;
            margin-top: 1.5rem;
            margin-bottom: 0.75rem;
          }
          .blog-content h3 {
            font-size: 1.5rem;
            font-weight: 600;
            margin-top: 1.25rem;
            margin-bottom: 0.5rem;
          }
          .blog-content p {
            font-size: 1.125rem;
            line-height: 1.8;
            margin-bottom: 1.25rem;
            color: #333;
          }
          .blog-content .drop-cap:first-letter {
            font-size: 4rem;
            font-weight: 700;
            float: left;
            margin-right: 0.5rem;
            line-height: 1;
            color: #2563eb;
          }
          .blog-content blockquote {
            border-left: 4px solid #2563eb;
            padding-left: 1.5rem;
            margin: 1.5rem 0;
            font-style: italic;
            font-size: 1.25rem;
            color: #555;
            background: #f8fafc;
            padding: 1rem 1.5rem;
            border-radius: 0.5rem;
          }
          .blog-content ul, .blog-content ol {
            margin: 1rem 0;
            padding-left: 1.5rem;
          }
          .blog-content li {
            margin: 0.5rem 0;
            line-height: 1.6;
          }
          .blog-content img {
            border-radius: 0.75rem;
            margin: 1.5rem 0;
            max-width: 100%;
            height: auto;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          }
          .blog-content strong {
            font-weight: 700;
            color: #1f2937;
          }
          .blog-content a {
            color: #2563eb;
            text-decoration: underline;
          }
          .blog-content .highlight-box {
            background-color: #fef3c7;
            padding: 1rem 1.5rem;
            border-radius: 0.75rem;
            margin: 1.5rem 0;
            border-left: 4px solid #f59e0b;
          }
          .blog-content code {
            background: #f1f5f9;
            padding: 0.2rem 0.4rem;
            border-radius: 0.25rem;
            font-size: 0.875rem;
          }
          .blog-content pre {
            background: #1e293b;
            color: #e2e8f0;
            padding: 1rem;
            border-radius: 0.5rem;
            overflow-x: auto;
            margin: 1.5rem 0;
          }
          @media (max-width: 768px) {
            .blog-content h1 {
              font-size: 1.875rem;
            }
            .blog-content h2 {
              font-size: 1.5rem;
            }
            .blog-content p {
              font-size: 1rem;
            }
          }
        `}</style>
      </>
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen pt-32">
        <div className="animate-spin h-12 w-12 border-4 border-blue-600 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (slug && currentBlog) {
    return <SingleBlogView />;
  }

  return (
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            College Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            News, events, and insights from our institution
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 pl-14 text-lg border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
            />
            <svg className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Tags Filter */}
        {allTags.length > 0 && (
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setSelectedTag("")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${selectedTag === "" ? "bg-blue-600 text-white shadow-md" : "bg-white text-gray-700 hover:bg-gray-100"}`}
            >
              All Posts
            </button>
            {allTags.map((tag, i) => (
              <button
                key={i}
                onClick={() => setSelectedTag(tag)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition ${selectedTag === tag ? "bg-blue-600 text-white shadow-md" : "bg-white text-gray-700 hover:bg-gray-100"}`}
              >
                #{tag}  
              </button>
            ))}
          </div>
        )}

        <p className="text-center text-gray-500 mb-8">
          Showing {filteredBlogs.length} {filteredBlogs.length === 1 ? 'article' : 'articles'}
        </p>

        {/* Blog Grid */}
        {filteredBlogs.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl">
            <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            <h3 className="mt-4 text-xl font-semibold text-gray-700">No articles found</h3>
            <p className="text-gray-500 mt-2">Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;