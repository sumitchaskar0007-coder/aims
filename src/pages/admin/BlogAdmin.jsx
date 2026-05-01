import React, { useState, useEffect } from 'react';
import API from '../../api';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const BlogAdmin = () => {
    const [blogs, setBlogs] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        author: '',
        tags: '',
        metaTitle: '',
        metaDescription: ''
    });
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [editingId, setEditingId] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTag, setSelectedTag] = useState('all');
    const [activeTab, setActiveTab] = useState('content');

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            const response = await API.get('/blogs');
            setBlogs(response.data);
        } catch (error) {
            console.error('Error fetching blogs:', error);
        }
    };

    const allTags = ['all', ...new Set(blogs.flatMap(blog => blog.tags || []))];

    const filteredBlogs = blogs.filter(blog => {
        const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             blog.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             blog.author.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesTag = selectedTag === 'all' || (blog.tags && blog.tags.includes(selectedTag));
        return matchesSearch && matchesTag;
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleContentChange = (value) => {
        setFormData({ ...formData, content: value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    // Replace just the handleSubmit function in your BlogAdmin.jsx
const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setUploadProgress(0);
    
    const formDataToSend = new FormData();
    formDataToSend.append('title', formData.title);
    formDataToSend.append('content', formData.content);
    formDataToSend.append('author', formData.author);
    if (formData.tags) formDataToSend.append('tags', formData.tags);
    if (formData.metaTitle) formDataToSend.append('metaTitle', formData.metaTitle);
    if (formData.metaDescription) formDataToSend.append('metaDescription', formData.metaDescription);
    if (image) formDataToSend.append('image', image);

    try {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            onUploadProgress: (progressEvent) => {
                if (progressEvent.total) {
                    const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    setUploadProgress(percent);
                }
            }
        };

        let response;
        if (editingId) {
            response = await API.put(`/blogs/${editingId}`, formDataToSend, config);
            console.log('Blog updated:', response.data);
        } else {
            response = await API.post('/blogs', formDataToSend, config);
            console.log('Blog created:', response.data);
        }
        
        await fetchBlogs();
        resetForm();
        setUploadProgress(0);
        
        // Show success message
        alert(editingId ? 'Blog updated successfully!' : 'Blog published successfully!');
        
    } catch (error) {
        console.error('Error saving blog:', error);
        const errorMessage = error.response?.data?.message || error.message || 'Failed to save blog';
        alert(`Error: ${errorMessage}`);
    } finally {
        setIsSubmitting(false);
    }
};

    const handleEdit = (item) => {
        setFormData({
            title: item.title,
            content: item.content,
            author: item.author,
            tags: item.tags ? item.tags.join(', ') : '',
            metaTitle: item.metaTitle || '',
            metaDescription: item.metaDescription || ''
        });
        setImagePreview(item.imageUrl);
        setEditingId(item._id);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setActiveTab('content');
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this blog?')) {
            try {
                await API.delete(`/blogs/${id}`);
                await fetchBlogs();
            } catch (error) {
                console.error('Error deleting blog:', error);
            }
        }
    };

    const resetForm = () => {
        setFormData({ title: '', content: '', author: '', tags: '', metaTitle: '', metaDescription: '' });
        setImage(null);
        setImagePreview(null);
        setEditingId(null);
        setActiveTab('content');
    };

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            ['blockquote', 'code-block'],
            [{ 'color': [] }, { 'background': [] }],
            ['link', 'image'],
            ['clean']
        ],
    };

    const formats = [
        'header', 'bold', 'italic', 'underline', 'strike',
        'list', 'bullet', 'blockquote', 'code-block',
        'color', 'background', 'link', 'image'
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-12">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-3">Blog Management</h1>
                    <p className="text-purple-100 text-lg max-w-2xl">
                        Create, edit, and manage blog posts with rich text formatting.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-500 text-sm">Total Blogs</p>
                                <p className="text-3xl font-bold text-gray-800">{blogs.length}</p>
                            </div>
                            <div className="bg-purple-100 p-3 rounded-full">
                                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-500 text-sm">With Images</p>
                                <p className="text-3xl font-bold text-gray-800">{blogs.filter(blog => blog.imageUrl).length}</p>
                            </div>
                            <div className="bg-green-100 p-3 rounded-full">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-yellow-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-500 text-sm">Total Authors</p>
                                <p className="text-3xl font-bold text-gray-800">{new Set(blogs.map(blog => blog.author)).size}</p>
                            </div>
                            <div className="bg-yellow-100 p-3 rounded-full">
                                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-500 text-sm">Total Views</p>
                                <p className="text-3xl font-bold text-gray-800">{blogs.reduce((sum, blog) => sum + (blog.views || 0), 0)}</p>
                            </div>
                            <div className="bg-blue-100 p-3 rounded-full">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                    <div className="flex border-b mb-6">
                        <button
                            onClick={() => setActiveTab('content')}
                            className={`px-6 py-3 font-semibold transition ${activeTab === 'content' ? 'border-b-2 border-purple-600 text-purple-600' : 'text-gray-600 hover:text-gray-800'}`}
                        >
                            Content
                        </button>
                        <button
                            onClick={() => setActiveTab('seo')}
                            className={`px-6 py-3 font-semibold transition ${activeTab === 'seo' ? 'border-b-2 border-purple-600 text-purple-600' : 'text-gray-600 hover:text-gray-800'}`}
                        >
                            SEO Settings
                        </button>
                    </div>

                    <form onSubmit={handleSubmit}>
                        {imagePreview && (
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-semibold mb-3">Featured Image Preview</label>
                                <div className="border-2 border-gray-200 rounded-xl p-4 bg-gray-50">
                                    <img src={imagePreview} alt="Preview" className="max-h-64 mx-auto rounded-lg shadow-md" />
                                </div>
                            </div>
                        )}

                        {activeTab === 'content' && (
                            <>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label className="block text-gray-700 text-sm font-semibold mb-2">
                                            Blog Title <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="title"
                                            value={formData.title}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            placeholder="Enter an engaging title"
                                        />
                                        {formData.title && (
                                            <p className="text-xs text-gray-500 mt-1">
                                                URL: /blog/{formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 text-sm font-semibold mb-2">
                                            Author <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="author"
                                            value={formData.author}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            placeholder="Enter author name"
                                        />
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label className="block text-gray-700 text-sm font-semibold mb-2">
                                        Content <span className="text-red-500">*</span>
                                    </label>
                                    <ReactQuill
                                        theme="snow"
                                        value={formData.content}
                                        onChange={handleContentChange}
                                        modules={modules}
                                        formats={formats}
                                        className="h-96 mb-12"
                                        placeholder="Write your blog content here..."
                                    />
                                </div>

                                <div className="mb-6">
                                    <label className="block text-gray-700 text-sm font-semibold mb-2">Tags (comma-separated)</label>
                                    <input
                                        type="text"
                                        name="tags"
                                        value={formData.tags}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        placeholder="e.g., education, campus life, events"
                                    />
                                </div>

                                <div className="mb-6">
                                    <label className="block text-gray-700 text-sm font-semibold mb-2">Featured Image</label>
                                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-purple-500 transition">
                                        <input type="file" onChange={handleImageChange} accept="image/*" className="hidden" id="image-upload" />
                                        <label htmlFor="image-upload" className="cursor-pointer">
                                            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            <p className="mt-2 text-sm text-gray-600">Click to upload or drag and drop</p>
                                        </label>
                                    </div>
                                </div>
                            </>
                        )}

                        {activeTab === 'seo' && (
                            <>
                                <div className="mb-6">
                                    <label className="block text-gray-700 text-sm font-semibold mb-2">Meta Title</label>
                                    <input
                                        type="text"
                                        name="metaTitle"
                                        value={formData.metaTitle}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        placeholder="SEO optimized title (60 characters max)"
                                        maxLength="60"
                                    />
                                    <p className="text-xs text-gray-500 mt-1">{formData.metaTitle?.length || 0}/60 characters</p>
                                </div>

                                <div className="mb-6">
                                    <label className="block text-gray-700 text-sm font-semibold mb-2">Meta Description</label>
                                    <textarea
                                        name="metaDescription"
                                        value={formData.metaDescription}
                                        onChange={handleInputChange}
                                        rows="3"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        placeholder="SEO optimized description (160 characters max)"
                                        maxLength="160"
                                    />
                                    <p className="text-xs text-gray-500 mt-1">{formData.metaDescription?.length || 0}/160 characters</p>
                                </div>
                            </>
                        )}

                        {uploadProgress > 0 && uploadProgress < 100 && (
                            <div className="mt-4">
                                <div className="flex justify-between text-sm text-gray-600 mb-1">
                                    <span>Uploading image...</span>
                                    <span>{uploadProgress}%</span>
                                </div>
                                <div className="bg-gray-200 rounded-full h-2.5">
                                    <div className="bg-purple-600 h-2.5 rounded-full transition-all duration-300" style={{ width: `${uploadProgress}%` }}></div>
                                </div>
                            </div>
                        )}

                        <div className="flex items-center justify-end space-x-4 mt-6 pt-6 border-t">
                            {editingId && (
                                <button type="button" onClick={resetForm} className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-semibold hover:bg-gray-50 transition">
                                    Cancel Edit
                                </button>
                            )}
                            <button
                                type="submit"
                                disabled={isSubmitting || (uploadProgress > 0 && uploadProgress < 100)}
                                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-indigo-700 transition disabled:opacity-50 shadow-md"
                            >
                                {isSubmitting ? 'Processing...' : editingId ? 'Update Blog Post' : 'Publish Blog Post'}
                            </button>
                        </div>
                    </form>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                        <div className="flex items-center space-x-4">
                            <span className="text-gray-700 font-semibold">Filter by tag:</span>
                            <select value={selectedTag} onChange={(e) => setSelectedTag(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-lg">
                                {allTags.map(tag => <option key={tag} value={tag}>{tag === 'all' ? 'All Tags' : `#${tag}`}</option>)}
                            </select>
                        </div>
                        <div className="relative">
                            <input type="text" placeholder="Search blogs..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full md:w-64 px-4 py-2 pl-10 border border-gray-300 rounded-lg" />
                            <svg className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    {filteredBlogs.map((blog) => (
                        <div key={blog._id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                            <div className="flex flex-col md:flex-row">
                                {blog.imageUrl && (
                                    <div className="md:w-1/4 h-48 md:h-auto">
                                        <img src={blog.imageUrl} alt={blog.title} className="w-full h-full object-cover" />
                                    </div>
                                )}
                                <div className={`p-6 ${blog.imageUrl ? 'md:w-3/4' : 'w-full'}`}>
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="text-xl font-bold text-gray-800">{blog.title}</h3>
                                        <span className="text-sm text-gray-500">{new Date(blog.date).toLocaleDateString()}</span>
                                    </div>
                                    <div className="flex items-center space-x-4 mb-3 text-sm text-gray-600">
                                        <span>By {blog.author}</span>
                                        <span>{blog.readingTime || 3} min read</span>
                                        <span>👁️ {blog.views || 0} views</span>
                                    </div>
                                    <div dangerouslySetInnerHTML={{ __html: blog.content.substring(0, 200) + '...' }} className="text-gray-600 mb-4" />
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {blog.tags?.map((tag, i) => (
                                            <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">#{tag}</span>
                                        ))}
                                    </div>
                                    <div className="flex space-x-3">
                                        <button onClick={() => handleEdit(blog)} className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition">Edit</button>
                                        <button onClick={() => handleDelete(blog._id)} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogAdmin;