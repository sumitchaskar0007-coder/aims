import React, { useState, useEffect } from 'react';
import API from '../../api';

const GalleryAdmin = () => {
    const [media, setMedia] = useState([]);
    const [formData, setFormData] = useState({ 
        title: '', 
        description: '', 
        category: '' 
    });
    const [mediaFile, setMediaFile] = useState(null);
    const [mediaPreview, setMediaPreview] = useState(null);
    const [mediaType, setMediaType] = useState('');
    const [editingId, setEditingId] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [filterCategory, setFilterCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchMedia();
    }, []);

    const fetchMedia = async () => {
        try {
            const response = await API.get('/gallery');
            setMedia(response.data);
        } catch (error) {
            console.error('Error fetching media:', error);
        }
    };

    // Get unique categories
    const categories = ['all', ...new Set(media.map(item => item.category).filter(Boolean))];

    // Filter media based on category and search
    const filteredMedia = media.filter(item => {
        const matchesCategory = filterCategory === 'all' || item.category === filterCategory;
        const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setMediaFile(file);
            setMediaType(file.type);
            
            // Create preview
            const reader = new FileReader();
            reader.onloadend = () => {
                setMediaPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        const formDataToSend = new FormData();
        formDataToSend.append('title', formData.title);
        formDataToSend.append('description', formData.description);
        formDataToSend.append('category', formData.category);
        if (mediaFile) formDataToSend.append('media', mediaFile);

        try {
            const config = {
                onUploadProgress: (progressEvent) => {
                    const percent = Math.round(
                        (progressEvent.loaded * 100) / progressEvent.total
                    );
                    setUploadProgress(percent);
                }
            };

            if (editingId) {
                await API.put(`/gallery/${editingId}`, formDataToSend, config);
            } else {
                await API.post('/gallery', formDataToSend, config);
            }
            await fetchMedia();
            resetForm();
            setUploadProgress(0);
        } catch (error) {
            console.error('Error saving media:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleEdit = (item) => {
        setFormData({
            title: item.title,
            description: item.description || '',
            category: item.category || ''
        });
        setMediaPreview(item.mediaUrl);
        setMediaType(item.mediaType === 'video' ? 'video/mp4' : 'image/jpeg');
        setEditingId(item._id);
        // Scroll to form
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this item? This action cannot be undone.')) {
            try {
                await API.delete(`/gallery/${id}`);
                await fetchMedia();
            } catch (error) {
                console.error('Error deleting item:', error);
            }
        }
    };

    const resetForm = () => {
        setFormData({ title: '', description: '', category: '' });
        setMediaFile(null);
        setMediaPreview(null);
        setMediaType('');
        setEditingId(null);
    };

    const MediaCard = ({ item }) => {
        const [isPlaying, setIsPlaying] = useState(false);
        const [isHovered, setIsHovered] = useState(false);
        const videoRef = React.useRef(null);

        const handlePlayVideo = (e) => {
            e.stopPropagation();
            if (videoRef.current) {
                videoRef.current.play();
                setIsPlaying(true);
            }
        };

        const handlePauseVideo = (e) => {
            e.stopPropagation();
            if (videoRef.current) {
                videoRef.current.pause();
                setIsPlaying(false);
            }
        };

        return (
            <div 
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="relative bg-gray-900" style={{ height: '200px' }}>
                    {item.mediaType === 'image' ? (
                        <img 
                            src={item.mediaUrl}
                            alt={item.title}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <>
                            <video 
                                ref={videoRef}
                                src={item.mediaUrl}
                                className="w-full h-full object-contain"
                                onClick={handlePauseVideo}
                            />
                            {!isPlaying && (
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 transition-opacity">
                                    <button
                                        onClick={handlePlayVideo}
                                        className="bg-blue-600 text-white rounded-full p-4 hover:bg-blue-700 transition-all transform hover:scale-110 shadow-xl"
                                    >
                                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z"/>
                                        </svg>
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                    
                    {/* Category Badge */}
                    {item.category && (
                        <div className="absolute top-3 left-3">
                            <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                                {item.category}
                            </span>
                        </div>
                    )}

                    {/* Media Type Badge */}
                    <div className="absolute top-3 right-3">
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full shadow-lg ${
                            item.mediaType === 'video' 
                                ? 'bg-purple-600 text-white' 
                                : 'bg-green-600 text-white'
                        }`}>
                            {item.mediaType === 'video' ? '🎥 Video' : '📸 Image'}
                        </span>
                    </div>

                    {/* Hover Actions */}
                    {isHovered && (
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent p-4">
                            <div className="flex justify-end space-x-2">
                                <button
                                    onClick={() => handleEdit(item)}
                                    className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded-lg transition transform hover:scale-110"
                                    title="Edit"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                </button>
                                <button
                                    onClick={() => handleDelete(item._id)}
                                    className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg transition transform hover:scale-110"
                                    title="Delete"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                <div className="p-5">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description || 'No description'}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{new Date(item.date).toLocaleDateString()}</span>
                        <span>{item.mediaType === 'video' ? '🎥 Video' : '📸 Image'}</span>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header with gradient */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 mt-0">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-2">Gallery Management</h1>
                    <p className="text-blue-100 text-lg">Upload and manage images and videos for the college gallery</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-500 text-sm">Total Media</p>
                                <p className="text-3xl font-bold text-gray-800">{media.length}</p>
                            </div>
                            <div className="bg-blue-100 p-3 rounded-full">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-500 text-sm">Images</p>
                                <p className="text-3xl font-bold text-gray-800">
                                    {media.filter(item => item.mediaType === 'image').length}
                                </p>
                            </div>
                            <div className="bg-green-100 p-3 rounded-full">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-500 text-sm">Videos</p>
                                <p className="text-3xl font-bold text-gray-800">
                                    {media.filter(item => item.mediaType === 'video').length}
                                </p>
                            </div>
                            <div className="bg-purple-100 p-3 rounded-full">
                                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Add/Edit Form */}
                <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                        {editingId ? '✏️ Edit Media' : '➕ Add New Media'}
                    </h2>
                    
                    <form onSubmit={handleSubmit}>
                        {/* Preview */}
                        {mediaPreview && (
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-semibold mb-3">Preview</label>
                                <div className="border-2 border-gray-200 rounded-xl p-4 bg-gray-50">
                                    {mediaType.startsWith('video/') ? (
                                        <video 
                                            src={mediaPreview} 
                                            className="max-h-64 mx-auto rounded-lg shadow-md" 
                                            controls
                                        />
                                    ) : (
                                        <img 
                                            src={mediaPreview} 
                                            alt="Preview" 
                                            className="max-h-64 mx-auto rounded-lg shadow-md"
                                        />
                                    )}
                                </div>
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-700 text-sm font-semibold mb-2">
                                    Title <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                    placeholder="Enter media title"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-semibold mb-2">Category</label>
                                <input
                                    type="text"
                                    name="category"
                                    value={formData.category}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                    placeholder="e.g., Events, Campus, Sports"
                                />
                            </div>
                        </div>

                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-semibold mb-2">Description</label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                rows="4"
                                placeholder="Enter media description"
                            />
                        </div>

                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-semibold mb-2">
                                Media File <span className="text-red-500">*</span>
                            </label>
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition">
                                <input
                                    type="file"
                                    onChange={handleFileChange}
                                    accept="image/*,video/*"
                                    className="hidden"
                                    id="media-upload"
                                />
                                <label htmlFor="media-upload" className="cursor-pointer">
                                    <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <p className="mt-2 text-sm text-gray-600">
                                        Click to upload or drag and drop
                                    </p>
                                    <p className="text-xs text-gray-500 mt-1">
                                        Images: JPG, PNG, GIF | Videos: MP4, MOV, AVI (Max 100MB)
                                    </p>
                                </label>
                            </div>
                        </div>

                        {/* Upload Progress */}
                        {uploadProgress > 0 && uploadProgress < 100 && (
                            <div className="mt-4">
                                <div className="flex justify-between text-sm text-gray-600 mb-1">
                                    <span>Uploading...</span>
                                    <span>{uploadProgress}%</span>
                                </div>
                                <div className="bg-gray-200 rounded-full h-2.5">
                                    <div 
                                        className="bg-blue-600 h-2.5 rounded-full transition-all duration-300" 
                                        style={{ width: `${uploadProgress}%` }}
                                    ></div>
                                </div>
                            </div>
                        )}

                        <div className="flex items-center justify-end space-x-4 mt-6">
                            {editingId && (
                                <button
                                    type="button"
                                    onClick={resetForm}
                                    className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-semibold hover:bg-gray-50 transition"
                                >
                                    Cancel
                                </button>
                            )}
                            <button
                                type="submit"
                                disabled={isSubmitting || (uploadProgress > 0 && uploadProgress < 100)}
                                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                            >
                                {isSubmitting ? 'Processing...' : editingId ? 'Update Media' : 'Upload Media'}
                            </button>
                        </div>
                    </form>
                </div>

                {/* Filters and Search */}
                <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                        <div className="flex items-center space-x-4">
                            <span className="text-gray-700 font-semibold">Filter by:</span>
                            <select
                                value={filterCategory}
                                onChange={(e) => setFilterCategory(e.target.value)}
                                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                {categories.map(cat => (
                                    <option key={cat} value={cat}>
                                        {cat === 'all' ? 'All Categories' : cat}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search media..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full md:w-64 px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <svg className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Media Grid */}
                {filteredMedia.length === 0 ? (
                    <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                        <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <h3 className="mt-4 text-lg font-semibold text-gray-700">No media found</h3>
                        <p className="text-gray-500">Try adjusting your filters or upload new media.</p>
                    </div>
                ) : (
                    <>
                        <p className="text-sm text-gray-600 mb-4">
                            Showing {filteredMedia.length} of {media.length} items
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredMedia.map((item) => (
                                <MediaCard key={item._id} item={item} />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default GalleryAdmin;