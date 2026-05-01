import React, { useState, useEffect } from 'react';
import API from '../../api';

const AnnouncementAdmin = () => {
    const [announcements, setAnnouncements] = useState([]);
    const [formData, setFormData] = useState({ title: '', content: '', important: false });
    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        fetchAnnouncements();
    }, []);

    const fetchAnnouncements = async () => {
        try {
            const response = await API.get('/announcements');
            setAnnouncements(response.data);
        } catch (error) {
            console.error('Error fetching announcements:', error);
        }
    };

    const handleInputChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormData({ ...formData, [e.target.name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingId) {
                await API.put(`/announcements/${editingId}`, formData);
            } else {
                await API.post('/announcements', formData);
            }
            fetchAnnouncements();
            resetForm();
        } catch (error) {
            console.error('Error saving announcement:', error);
        }
    };

    const handleEdit = (item) => {
        setFormData({
            title: item.title,
            content: item.content,
            important: item.important
        });
        setEditingId(item._id);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this announcement?')) {
            try {
                await API.delete(`/announcements/${id}`);
                fetchAnnouncements();
            } catch (error) {
                console.error('Error deleting announcement:', error);
            }
        }
    };

    const resetForm = () => {
        setFormData({ title: '', content: '', important: false });
        setEditingId(null);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Manage Announcements</h1>

            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-8">
                <h2 className="text-xl font-semibold mb-4">{editingId ? 'Edit Announcement' : 'Add New Announcement'}</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Content</label>
                    <textarea
                        name="content"
                        value={formData.content}
                        onChange={handleInputChange}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                        rows="4"
                    />
                </div>
                <div className="mb-4">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            name="important"
                            checked={formData.important}
                            onChange={handleInputChange}
                            className="mr-2"
                        />
                        <span className="text-sm font-bold text-gray-700">Mark as Important</span>
                    </label>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        {editingId ? 'Update' : 'Add'}
                    </button>
                    {editingId && (
                        <button
                            type="button"
                            onClick={resetForm}
                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Cancel
                        </button>
                    )}
                </div>
            </form>

            <div className="space-y-4">
                {announcements.map((announcement) => (
                    <div 
                        key={announcement._id} 
                        className={`bg-white rounded-lg shadow-md p-6 ${
                            announcement.important ? 'border-l-4 border-red-500' : ''
                        }`}
                    >
                        <h3 className="text-xl font-semibold mb-2">{announcement.title}</h3>
                        <p className="text-gray-600 mb-3">{announcement.content}</p>
                        <div className="flex items-center justify-between">
                            <p className="text-sm text-gray-500">
                                Posted: {new Date(announcement.date).toLocaleDateString()}
                            </p>
                            <div className="space-x-2">
                                <button
                                    onClick={() => handleEdit(announcement)}
                                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-3 rounded text-sm"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(announcement._id)}
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded text-sm"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AnnouncementAdmin;