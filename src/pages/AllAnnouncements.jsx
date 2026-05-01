import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import API from '../api';

const AllAnnouncements = () => {
    const [announcements, setAnnouncements] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('all'); // 'all', 'important', 'regular'

    useEffect(() => {
        fetchAllAnnouncements();
    }, []);

    const fetchAllAnnouncements = async () => {
        try {
            const response = await API.get('/announcements');
            // Sort by date (latest first)
            const sortedAnnouncements = response.data.sort((a, b) => 
                new Date(b.date) - new Date(a.date)
            );
            setAnnouncements(sortedAnnouncements);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching announcements:', error);
            setLoading(false);
        }
    };

    // Filter announcements based on selection
    const filteredAnnouncements = announcements.filter(announcement => {
        if (filter === 'important') return announcement.important;
        if (filter === 'regular') return !announcement.important;
        return true; // 'all' filter
    });

    if (loading) {
        return (
            <div className="container mx-auto px-4 py-8 mt-20 md:mt-24">
                <div className="animate-pulse">
                    <div className="h-8 bg-gray-200 rounded w-64 mb-8"></div>
                    <div className="space-y-4">
                        {[1, 2, 3, 4, 5].map((n) => (
                            <div key={n} className="bg-white rounded-lg shadow-md p-6">
                                <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            <Helmet>
                <title>All Announcements | AIMS Pune</title>
                <meta name="description" content="View all announcements and important updates from AIMS Pune" />
            </Helmet>

            <div className="container mx-auto px-4 py-8 mt-20 md:mt-24">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-0">
                        All Announcements
                    </h1>
                    
                    {/* Filter Buttons */}
                    <div className="flex gap-2">
                        <button
                            onClick={() => setFilter('all')}
                            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                                filter === 'all'
                                    ? 'bg-primary text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            All ({announcements.length})
                        </button>
                        <button
                            onClick={() => setFilter('important')}
                            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                                filter === 'important'
                                    ? 'bg-red-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            Important ({announcements.filter(a => a.important).length})
                        </button>
                        <button
                            onClick={() => setFilter('regular')}
                            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                                filter === 'regular'
                                    ? 'bg-green-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            Regular ({announcements.filter(a => !a.important).length})
                        </button>
                    </div>
                </div>

                {/* Announcements Count */}
                <p className="text-gray-600 mb-6">
                    Showing {filteredAnnouncements.length} of {announcements.length} announcements
                </p>

                {/* Announcements List */}
                {filteredAnnouncements.length > 0 ? (
                    <div className="space-y-4">
                        {filteredAnnouncements.map((announcement, index) => (
                            <div 
                                key={announcement._id} 
                                className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow ${
                                    announcement.important ? 'border-l-4 border-red-500' : ''
                                }`}
                            >
                                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                                    <h2 className="text-xl font-semibold text-gray-900">
                                        {announcement.title}
                                    </h2>
                                    {announcement.important && (
                                        <span className="bg-red-100 text-red-800 text-xs font-semibold px-3 py-1 rounded-full">
                                            Important
                                        </span>
                                    )}
                                </div>
                                
                                <p className="text-gray-700 mb-4">{announcement.content}</p>
                                
                                <div className="flex items-center text-sm text-gray-500">
                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    Posted: {new Date(announcement.date).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                        hour: '2-digit',
                                        minute: '2-digit'
                                    })}
                                </div>

                                {/* Serial Number Badge */}
                                <div className="mt-2 text-xs text-gray-400">
                                    Announcement #{filteredAnnouncements.length - index}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16 bg-gray-50 rounded-lg">
                        <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                        </svg>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">No announcements found</h3>
                        <p className="text-gray-500">
                            {filter === 'all' 
                                ? 'There are no announcements at this time.' 
                                : filter === 'important' 
                                ? 'No important announcements at this time.' 
                                : 'No regular announcements at this time.'}
                        </p>
                    </div>
                )}
            </div>
        </>
    );
};

export default AllAnnouncements;
