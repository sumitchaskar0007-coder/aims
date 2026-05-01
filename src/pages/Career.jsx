import React, { useState, useEffect } from "react";
import API from "../api";

const Career = () => {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCareers();
  }, []);

  const fetchCareers = async () => {
    try {
      const response = await API.get("/careers/active");
      setCareers(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching careers:", error);
      setLoading(false);
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen pt-32">
        <div className="animate-spin h-12 w-12 border-b-4 border-[#0a2a66] rounded-full"></div>
      </div>
    );

  return (
    <div className="pt-32 pb-16 bg-gray-50 min-h-screen">

      <div className="max-w-6xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#0a2a66]">
            Career Opportunities
          </h1>
          <p className="text-gray-600 mt-3 max-w-xl mx-auto">
            Join our academic and professional team. Explore current openings below.
          </p>
        </div>

        {/* JOB LIST */}
        <div className="space-y-8">

          {careers.map((career) => (
            <div
              key={career._id}
              className="bg-white rounded-xl shadow hover:shadow-xl transition p-8"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">

                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {career.title}
                  </h3>

                  <span className="inline-block mt-2 bg-blue-50 text-[#0a2a66] px-4 py-1 rounded-full text-sm">
                    {career.department}
                  </span>
                </div>

                <div className="mt-4 md:mt-0 text-sm">
                  <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full">
                    Last Date:{" "}
                    {new Date(career.lastDate).toLocaleDateString()}
                  </span>
                </div>

              </div>

              {/* DESCRIPTION */}
              <p className="text-gray-700 mt-5 leading-relaxed">
                {career.description}
              </p>

              {/* REQUIREMENTS */}
              <div className="mt-6">
                <h4 className="font-semibold text-gray-800 mb-3">
                  Requirements
                </h4>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-disc pl-5">
                  {career.requirements.map((req, index) => (
                    <li key={index} className="text-gray-600">
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              {/* FOOTER */}
              <div className="flex justify-between items-center mt-6 text-sm text-gray-500 border-t pt-4">
                <span>
                  Posted:{" "}
                  {new Date(career.postedDate).toLocaleDateString()}
                </span>

                <span className="text-[#0a2a66] font-medium">
                  Apply Soon
                </span>
              </div>

            </div>
          ))}

          {careers.length === 0 && (
            <div className="text-center py-16 bg-white rounded-xl shadow">
              <p className="text-gray-500">
                Currently no openings available.
              </p>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

export default Career;