import React, { useState, useEffect } from "react";
import API from "../api";

const Notice = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      const response = await API.get("/notices");
      setNotices(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching notices:", error);
      setLoading(false);
    }
  };

  const getFileIcon = (fileType) => {
    if (fileType?.includes("pdf")) return "📄";
    if (fileType?.includes("image")) return "🖼️";
    if (fileType?.includes("word") || fileType?.includes("document"))
      return "📝";
    if (fileType?.includes("excel") || fileType?.includes("sheet"))
      return "📊";
    return "📎";
  };

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen pt-32">
        <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-[#0a2a66]"></div>
      </div>
    );

  return (
    <div className="pt-32 pb-16 bg-gray-50 min-h-screen">

      <div className="max-w-5xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#0a2a66]">
            College Notices
          </h1>
          <p className="text-gray-600 mt-3 max-w-xl mx-auto">
            Stay updated with official announcements and important information.
          </p>
        </div>

        {/* NOTICE LIST */}
        <div className="space-y-6">

          {notices.map((notice) => (
            <div
              key={notice._id}
              className="bg-white rounded-xl shadow hover:shadow-xl transition p-6 border-l-4 border-[#0a2a66]"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {notice.title}
              </h3>

              <p className="text-gray-600 mb-4">
                {notice.description}
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                <span className="text-sm text-gray-500">
                  Published on:{" "}
                  {new Date(notice.date).toLocaleDateString()}
                </span>

                {notice.fileUrl && (
                  <a
                    href={notice.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-50 text-[#0a2a66] px-4 py-2 rounded-full hover:bg-blue-100 transition text-sm"
                  >
                    <span className="text-lg">
                      {getFileIcon(notice.fileType)}
                    </span>
                    Download Attachment
                  </a>
                )}

              </div>
            </div>
          ))}

          {notices.length === 0 && (
            <div className="text-center py-16 bg-white rounded-xl shadow">
              <p className="text-gray-500">
                No notices available at this time.
              </p>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

export default Notice;