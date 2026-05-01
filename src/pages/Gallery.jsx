import React, { useState, useEffect, useRef } from "react";
import API from "../api";

const Gallery = () => {
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [playingVideo, setPlayingVideo] = useState(null);

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      const response = await API.get("/gallery");
      setMedia(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching gallery:", error);
      setLoading(false);
    }
  };

  const filteredMedia = media.filter((item) => {
    if (filter === "all") return true;
    if (filter === "images") return item.mediaType === "image";
    if (filter === "videos") return item.mediaType === "video";
    return true;
  });

  /* ================= VIDEO CARD ================= */

  const VideoCard = ({ item }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const handlePlayVideo = () => {
      if (videoRef.current) {
        if (playingVideo && playingVideo !== item._id) {
          const otherVideo = document.getElementById(
            `video-${playingVideo}`
          );
          if (otherVideo) otherVideo.pause();
        }

        videoRef.current.play();
        setIsPlaying(true);
        setPlayingVideo(item._id);
      }
    };

    const handlePauseVideo = () => {
      if (videoRef.current) {
        videoRef.current.pause();
        setIsPlaying(false);
        setPlayingVideo(null);
      }
    };

    return (
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group">
        <div className="relative h-64 bg-black">
          <video
            id={`video-${item._id}`}
            ref={videoRef}
            src={item.mediaUrl}
            className="w-full h-full object-contain"
            onClick={isPlaying ? handlePauseVideo : handlePlayVideo}
            playsInline
          />

          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <button
                onClick={handlePlayVideo}
                className="bg-blue-600 text-white p-5 rounded-full hover:scale-110 transition shadow-lg"
              >
                ▶
              </button>
            </div>
          )}

          <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
            Video
          </div>
        </div>

        <div className="p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {item.title}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-2">
            {item.description}
          </p>

          <div className="flex justify-between text-xs text-gray-500 mt-4">
            <span>{item.category}</span>
            <span>
              {new Date(item.date).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
    );
  };

  /* ================= IMAGE CARD ================= */

  const ImageCard = ({ item }) => (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group">
      <div className="overflow-hidden">
        <img
          src={item.mediaUrl}
          alt={item.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {item.title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-2">
          {item.description}
        </p>

        <div className="flex justify-between text-xs text-gray-500 mt-4">
          <span>{item.category}</span>
          <span>
            {new Date(item.date).toLocaleDateString()}
          </span>
        </div>
      </div>
    </div>
  );

  /* ================= LOADING ================= */

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen pt-32">
        <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-blue-600"></div>
      </div>
    );

  /* ================= MAIN UI ================= */

  return (
    <div className="pt-32 pb-16 bg-gray-50 min-h-screen">

      <div className="max-w-7xl mx-auto px-4">

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#0a2a66]">
            College Gallery
          </h1>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Explore moments, achievements, and campus life through
            our curated collection of images and videos.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {["all", "images", "videos"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-6 py-2 rounded-full font-medium transition ${
                filter === type
                  ? "bg-[#0a2a66] text-white shadow-lg"
                  : "bg-white border text-gray-700 hover:bg-gray-100"
              }`}
            >
              {type === "all" && "All Media"}
              {type === "images" && "📸 Images"}
              {type === "videos" && "🎥 Videos"}
            </button>
          ))}
        </div>

        {/* Count */}
        <p className="text-center text-sm text-gray-500 mb-6">
          Showing {filteredMedia.length}{" "}
          {filteredMedia.length === 1 ? "item" : "items"}
        </p>

        {/* Grid */}
        {filteredMedia.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl shadow">
            <p className="text-gray-500 text-lg">
              No media available at the moment.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMedia.map((item) =>
              item.mediaType === "video" ? (
                <VideoCard key={item._id} item={item} />
              ) : (
                <ImageCard key={item._id} item={item} />
              )
            )}
          </div>
        )}

      </div>
    </div>
  );
};

export default Gallery;