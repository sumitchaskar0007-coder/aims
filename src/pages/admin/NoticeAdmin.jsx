import React, { useState, useEffect } from 'react';
import API from '../../api';

const NoticeAdmin = () => {
    const [notices, setNotices] = useState([]);
    const [formData, setFormData] = useState({ title: '', description: '' });
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState('');
    const [filePreview, setFilePreview] = useState(null);
    const [fileType, setFileType] = useState('');
    const [editingId, setEditingId] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [dateFilter, setDateFilter] = useState('all');

    useEffect(() => {
        fetchNotices();
    }, []);

    const fetchNotices = async () => {
        try {
            const response = await API.get('/notices');
            setNotices(response.data);
        } catch (error) {
            console.error('Error fetching notices:', error);
        }
    };

    // Filter notices based on search and date
    const filteredNotices = notices.filter(notice => {
        const matchesSearch = notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             notice.description.toLowerCase().includes(searchTerm.toLowerCase());
        
        if (dateFilter === 'all') return matchesSearch;
        
        const noticeDate = new Date(notice.date);
        const today = new Date();
        const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
        const monthAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);
        
        if (dateFilter === 'week') return matchesSearch && noticeDate >= weekAgo;
        if (dateFilter === 'month') return matchesSearch && noticeDate >= monthAgo;
        
        return matchesSearch;
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            setFileName(selectedFile.name);
            setFileType(selectedFile.type);
            
            // Create preview for images
            if (selectedFile.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setFilePreview(reader.result);
                };
                reader.readAsDataURL(selectedFile);
            } else {
                setFilePreview(null);
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        const formDataToSend = new FormData();
        formDataToSend.append('title', formData.title);
        formDataToSend.append('description', formData.description);
        if (file) formDataToSend.append('file', file);

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
                await API.put(`/notices/${editingId}`, formDataToSend, config);
            } else {
                await API.post('/notices', formDataToSend, config);
            }
            await fetchNotices();
            resetForm();
            setUploadProgress(0);
        } catch (error) {
            console.error('Error saving notice:', error);
            setUploadProgress(0);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleEdit = (item) => {
        setFormData({
            title: item.title,
            description: item.description
        });
        setFileName(item.fileUrl ? 'Current file: ' + item.fileUrl.split('/').pop() : '');
        setFilePreview(item.fileUrl);
        setFileType(item.fileType);
        setEditingId(item._id);
        // Scroll to form
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this notice? This action cannot be undone.')) {
            try {
                await API.delete(`/notices/${id}`);
                await fetchNotices();
            } catch (error) {
                console.error('Error deleting notice:', error);
            }
        }
    };

    const resetForm = () => {
        setFormData({ title: '', description: '' });
        setFile(null);
        setFileName('');
        setFilePreview(null);
        setFileType('');
        setEditingId(null);
    };

    const getFileIcon = (fileType) => {
        if (fileType?.includes('pdf')) return '📄';
        if (fileType?.includes('image')) return '🖼️';
        if (fileType?.includes('word') || fileType?.includes('document')) return '📝';
        if (fileType?.includes('excel') || fileType?.includes('sheet')) return '📊';
        if (fileType?.includes('zip') || fileType?.includes('rar')) return '🗜️';
        return '📎';
    };

    const getFileColor = (fileType) => {
        if (fileType?.includes('pdf')) return 'bg-red-100 text-red-700';
        if (fileType?.includes('image')) return 'bg-green-100 text-green-700';
        if (fileType?.includes('word')) return 'bg-blue-100 text-blue-700';
        if (fileType?.includes('excel')) return 'bg-emerald-100 text-emerald-700';
        return 'bg-gray-100 text-gray-700';
    };

    const NoticeCard = ({ notice }) => {
        const [isHovered, setIsHovered] = useState(false);

        return (
            <div 
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-800 flex-1">{notice.title}</h3>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full ml-2">
                            {new Date(notice.date).toLocaleDateString()}
                        </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">{notice.description}</p>
                    
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            {notice.fileUrl && (
                                <a 
                                    href={notice.fileUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg ${getFileColor(notice.fileType)} hover:opacity-80 transition`}
                                >
                                    <span className="text-lg">{getFileIcon(notice.fileType)}</span>
                                    <span className="text-sm font-medium">View Attachment</span>
                                </a>
                            )}
                        </div>
                        
                        {/* Hover Actions */}
                        {isHovered && (
                            <div className="flex space-x-2">
                                <button
                                    onClick={() => handleEdit(notice)}
                                    className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded-lg transition transform hover:scale-110"
                                    title="Edit Notice"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                </button>
                                <button
                                    onClick={() => handleDelete(notice._id)}
                                    className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg transition transform hover:scale-110"
                                    title="Delete Notice"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header with gradient - This adds the top margin */}
            <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-12 mt-0">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-3">Notice Management</h1>
                    <p className="text-orange-100 text-lg max-w-2xl">
                        Create and manage important notices, announcements, and circulars for the college community.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-orange-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-500 text-sm">Total Notices</p>
                                <p className="text-3xl font-bold text-gray-800">{notices.length}</p>
                            </div>
                            <div className="bg-orange-100 p-3 rounded-full">
                                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-500 text-sm">With Attachments</p>
                                <p className="text-3xl font-bold text-gray-800">
                                    {notices.filter(notice => notice.fileUrl).length}
                                </p>
                            </div>
                            <div className="bg-green-100 p-3 rounded-full">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-500 text-sm">This Week</p>
                                <p className="text-3xl font-bold text-gray-800">
                                    {notices.filter(notice => {
                                        const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
                                        return new Date(notice.date) >= weekAgo;
                                    }).length}
                                </p>
                            </div>
                            <div className="bg-blue-100 p-3 rounded-full">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-500 text-sm">This Month</p>
                                <p className="text-3xl font-bold text-gray-800">
                                    {notices.filter(notice => {
                                        const monthAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
                                        return new Date(notice.date) >= monthAgo;
                                    }).length}
                                </p>
                            </div>
                            <div className="bg-purple-100 p-3 rounded-full">
                                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Add/Edit Form */}
                <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                        {editingId ? (
                            <>
                                <span className="bg-yellow-100 p-2 rounded-lg mr-3">✏️</span>
                                Edit Notice
                            </>
                        ) : (
                            <>
                                <span className="bg-green-100 p-2 rounded-lg mr-3">➕</span>
                                Create New Notice
                            </>
                        )}
                    </h2>
                    
                    <form onSubmit={handleSubmit}>
                        {/* File Preview */}
                        {filePreview && fileType?.startsWith('image/') && (
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-semibold mb-3">Attachment Preview</label>
                                <div className="border-2 border-gray-200 rounded-xl p-4 bg-gray-50">
                                    <img 
                                        src={filePreview} 
                                        alt="Preview" 
                                        className="max-h-48 mx-auto rounded-lg shadow-md"
                                    />
                                </div>
                            </div>
                        )}

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-semibold mb-2">
                                Notice Title <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                                placeholder="Enter notice title"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-semibold mb-2">
                                Description <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                                rows="5"
                                placeholder="Enter detailed notice description"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-semibold mb-2">
                                Attachment (Optional)
                            </label>
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-orange-500 transition">
                                <input
                                    type="file"
                                    onChange={handleFileChange}
                                    className="hidden"
                                    id="file-upload"
                                />
                                <label htmlFor="file-upload" className="cursor-pointer">
                                    <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                                    </svg>
                                    <p className="mt-2 text-sm text-gray-600">
                                        Click to upload or drag and drop
                                    </p>
                                    <p className="text-xs text-gray-500 mt-1">
                                        PDF, Images, Documents up to 50MB
                                    </p>
                                </label>
                            </div>
                            {fileName && (
                                <div className="mt-3 flex items-center space-x-2 text-sm">
                                    <span className={`px-3 py-1.5 rounded-lg ${getFileColor(fileType)}`}>
                                        {getFileIcon(fileType)} {fileName}
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Upload Progress */}
                        {uploadProgress > 0 && uploadProgress < 100 && (
                            <div className="mb-4">
                                <div className="flex justify-between text-sm text-gray-600 mb-1">
                                    <span>Uploading attachment...</span>
                                    <span>{uploadProgress}%</span>
                                </div>
                                <div className="bg-gray-200 rounded-full h-2.5">
                                    <div 
                                        className="bg-orange-600 h-2.5 rounded-full transition-all duration-300" 
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
                                    Cancel Edit
                                </button>
                            )}
                            <button
                                type="submit"
                                disabled={isSubmitting || (uploadProgress > 0 && uploadProgress < 100)}
                                className="px-8 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-lg hover:from-orange-700 hover:to-red-700 transition disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                            >
                                {isSubmitting ? 'Processing...' : editingId ? 'Update Notice' : 'Publish Notice'}
                            </button>
                        </div>
                    </form>
                </div>

                {/* Filters and Search */}
                <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                        <div className="flex items-center space-x-4">
                            <span className="text-gray-700 font-semibold">Time filter:</span>
                            <select
                                value={dateFilter}
                                onChange={(e) => setDateFilter(e.target.value)}
                                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            >
                                <option value="all">All Time</option>
                                <option value="week">Last 7 Days</option>
                                <option value="month">Last 30 Days</option>
                            </select>
                        </div>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search notices..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full md:w-64 px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                            <svg className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Results Info */}
                <div className="flex justify-between items-center mb-4">
                    <p className="text-sm text-gray-600">
                        Showing <span className="font-semibold">{filteredNotices.length}</span> of{' '}
                        <span className="font-semibold">{notices.length}</span> notices
                    </p>
                    {(searchTerm || dateFilter !== 'all') && (
                        <button
                            onClick={() => {
                                setSearchTerm('');
                                setDateFilter('all');
                            }}
                            className="text-sm text-orange-600 hover:text-orange-800"
                        >
                            Clear filters
                        </button>
                    )}
                </div>

                {/* Notices Grid */}
                {filteredNotices.length === 0 ? (
                    <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                        <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                        <h3 className="mt-4 text-lg font-semibold text-gray-700">No notices found</h3>
                        <p className="text-gray-500">
                            {searchTerm || dateFilter !== 'all' 
                                ? 'Try adjusting your filters or search terms.' 
                                : 'Get started by creating your first notice!'}
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {filteredNotices.map((notice) => (
                            <NoticeCard key={notice._id} notice={notice} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default NoticeAdmin;