import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { dbApi } from "../lib/firebase";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    mobileNumber: "",
    emailAddress: "",
    course: "MBA",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const nextErrors = {};

    if (!form.name.trim()) nextErrors.name = "Full name is required";
    if (!/^[0-9]{10}$/.test(form.mobileNumber)) {
      nextErrors.mobileNumber = "Enter a valid 10-digit mobile number";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.emailAddress)) {
      nextErrors.emailAddress = "Enter a valid email address";
    }
    if (!form.course) nextErrors.course = "Select a course";

    return nextErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    setStatus("");

    if (Object.keys(nextErrors).length) return;

    setLoading(true);
    try {
      await dbApi.addDoc(dbApi.collection(dbApi.db, "admissionEnquiries"), {
        ...form,
        createdAt: dbApi.serverTimestamp(),
      });
      setStatus("Application submitted successfully. Our admissions team will contact you soon.");
      setForm({ name: "", mobileNumber: "", emailAddress: "", course: "MBA" });
    } catch (err) {
      console.error(err);
      setStatus("Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    { title: "Phone", value: "+91-9356393629", href: "tel:+919356393629" },
    { title: "Email", value: "adityainstitute.admission@gmail.com", href: "mailto:adityainstitute.admission@gmail.com" },
    { title: "Campus", value: "Narhe, Pune, Maharashtra - 411041" },
  ];

  return (
    <>
      <Helmet>
        <title>Apply Now | Admission Enquiry | AIMS Pune</title>
        <meta
          name="description"
          content="Apply now for AIMS Pune admissions. Submit admission enquiry for MBA and MCA courses."
        />
        <meta name="keywords" content="AIMS Pune admission, MBA admission Pune, MCA admission Pune, apply now AIMS" />
      </Helmet>

      <div className="bg-white">
        <section className="bg-[#0a2a66] text-white py-14 md:py-20 px-4">
          <div className="container-wide grid lg:grid-cols-[1fr,460px] gap-10 items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-yellow-300">Apply Now</p>
              <h1 className="mt-3 text-4xl md:text-5xl font-bold">Admission Enquiry</h1>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-blue-100">
                Fill the form to get started. Our admissions team will guide you for MBA and
                MCA program details, eligibility, documents and campus visit support.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-2xl">
              <h2 className="text-2xl font-bold text-gray-900">Admission Enquiry</h2>
              <p className="mt-1 text-sm text-gray-600">Fill the form to get started</p>

              <form onSubmit={onSubmit} className="mt-6 space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-blue-100"
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">Mobile Number *</label>
                  <input
                    type="tel"
                    name="mobileNumber"
                    value={form.mobileNumber}
                    onChange={handleChange}
                    placeholder="Enter 10-digit mobile number"
                    maxLength="10"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-blue-100"
                  />
                  {errors.mobileNumber && <p className="mt-1 text-xs text-red-600">{errors.mobileNumber}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="emailAddress"
                    value={form.emailAddress}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-blue-100"
                  />
                  {errors.emailAddress && <p className="mt-1 text-xs text-red-600">{errors.emailAddress}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">Select Course *</label>
                  <div className="grid grid-cols-2 gap-3">
                    {["MBA", "MCA"].map((course) => (
                      <label
                        key={course}
                        className={`flex cursor-pointer items-center justify-center gap-2 rounded-lg border px-4 py-3 text-sm font-semibold ${
                          form.course === course
                            ? "border-primary bg-blue-50 text-primary"
                            : "border-gray-300 text-gray-700"
                        }`}
                      >
                        <input
                          type="radio"
                          name="course"
                          value={course}
                          checked={form.course === course}
                          onChange={handleChange}
                          className="h-4 w-4 text-primary"
                        />
                        {course}
                      </label>
                    ))}
                  </div>
                  {errors.course && <p className="mt-1 text-xs text-red-600">{errors.course}</p>}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-lg bg-[#0a2a66] py-3 font-bold text-white hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Submitting..." : "Submit Application"}
                </button>

                <p className="text-center text-xs text-gray-500">
                  By submitting, you agree to our terms and privacy policy.
                </p>

                {status && (
                  <div
                    className={`rounded-lg p-3 text-center text-sm font-semibold ${
                      status.includes("successfully") ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
                    }`}
                  >
                    {status}
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>

        <section className="container-wide py-14">
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((item) => (
              <div key={item.title} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-wide text-primary">{item.title}</p>
                {item.href ? (
                  <a href={item.href} className="mt-2 block break-words text-lg font-bold text-gray-900 hover:text-primary">
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-2 text-lg font-bold text-gray-900">{item.value}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
