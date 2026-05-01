import React, { useState, useEffect } from 'react';
import API from '../api';

const Announcement = () => {
    const [announcements, setAnnouncements] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        fetchAnnouncements();
    }, []);

    const fetchAnnouncements = async () => {
        try {
            const response = await API.get('/announcements');
            // Sort announcements by date in descending order (latest first)
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

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? announcements.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === announcements.length - 1 ? 0 : prevIndex + 1
        );
    };

    if (loading) {
        return (
            <section className="py-8 md:py-12 px-4 bg-gray-50">
                <div className="container-wide">
                    <div className="animate-pulse">
                        <div className="h-8 bg-gray-200 rounded w-48 mb-8"></div>
                        <div className="bg-white rounded-lg shadow-md p-8">
                            <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    if (announcements.length === 0) return null;

    return (
        <section className="py-8 md:py-12 px-4 bg-gray-50">
            <div className="container-wide">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        Latest Announcements
                    </h2>
                    <a 
                        href="/announcements" 
                        className="text-primary text-sm font-semibold hover:underline transition-colors"
                    >
                        View All →
                    </a>
                </div>
                
                {/* Slider Container */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Current Announcement */}
                    <div 
                        className={`bg-white rounded-lg shadow-md p-6 md:p-8 transition-all duration-300 ${
                            announcements[currentIndex].important ? 'border-l-4 border-red-500' : ''
                        }`}
                    >
                        <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                            <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                                {announcements[currentIndex].title}
                            </h3>
                            {announcements[currentIndex].important && (
                                <span className="bg-red-100 text-red-800 text-xs font-semibold px-3 py-1 rounded-full">
                                    Important
                                </span>
                            )}
                        </div>
                        <p className="text-gray-700 text-base md:text-lg mb-4">
                            {announcements[currentIndex].content}
                        </p>
                        <div className="flex justify-between items-center text-sm text-gray-500">
                            <p>
                                Posted: {new Date(announcements[currentIndex].date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </p>
                            <p className="text-gray-400">
                                {currentIndex + 1} of {announcements.length}
                            </p>
                        </div>
                    </div>

                    {/* Left Navigation Button */}
                    <button
                        onClick={handlePrevious}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 md:-translate-x-12 
                                 bg-primary text-white p-2 md:p-3 rounded-full hover:bg-blue-800 
                                 focus:outline-none focus:ring-2 focus:ring-blue-500
                                 transition-all duration-200 shadow-lg"
                        aria-label="Previous announcement"
                    >
                        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Right Navigation Button */}
                    <button
                        onClick={handleNext}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 md:translate-x-12
                                 bg-primary text-white p-2 md:p-3 rounded-full hover:bg-blue-800
                                 focus:outline-none focus:ring-2 focus:ring-blue-500
                                 transition-all duration-200 shadow-lg"
                        aria-label="Next announcement"
                    >
                        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Dots Indicator */}
                    <div className="flex justify-center mt-6 space-x-2">
                        {announcements.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-2 rounded-full transition-all duration-200 ${
                                    index === currentIndex 
                                        ? 'bg-primary w-6' 
                                        : 'bg-gray-300 w-2 hover:bg-gray-400'
                                }`}
                                aria-label={`Go to announcement ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Announcement;