import { useState } from "react";

const categories = ["Academic", "Administrative", "Hostel", "Transport", "Other"];

export default function Grievance() {
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const [form, setForm] = useState({
        title: "",
        category: categories[0],
        description: "",
    });

    const handleChange = (e) => {
        setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
    };

    const validate = () => {
        if (!form.title.trim()) return "Title is required";
        if (form.title.length < 5) return "Title must be at least 5 characters";
        if (!form.description.trim()) return "Description is required";
        if (form.description.length < 10)
            return "Description must be at least 10 characters";
        return "";
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        const v = validate();
        if (v) return setError(v);

        setSubmitting(true);

        // ✅ Open email client
        const subject = encodeURIComponent("New Grievance Submitted");
        const body = encodeURIComponent(`
Grievance Details

Title: ${form.title}
Category: ${form.category}
Description: ${form.description}
`);

        window.location.href = `mailto:adityainstitutepune@gmail.com?subject=${subject}&body=${body}`;

        setSuccess("Grievance submitted successfully. Email opened ✅");
        setSubmitting(false);

        // Reset form
        setForm({
            title: "",
            category: categories[0],
            description: "",
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 py-16 px-4">
            <div className="max-w-4xl mx-auto">

                {/* HEADER */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-[#0a2a66] mb-2">
                        Grievance Cell
                    </h1>
                    <p className="text-gray-600">
                        Submit your grievance and it will be sent directly to the institute
                    </p>
                </div>

                {/* FORM CARD */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-white rounded-xl shadow p-8"
                >
                    {error && (
                        <div className="mb-4 p-3 rounded bg-red-100 text-red-700 font-medium">
                            {error}
                        </div>
                    )}

                    {success && (
                        <div className="mb-4 p-3 rounded bg-green-100 text-green-700 font-medium">
                            {success}
                        </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        {/* TITLE */}
                        <div>
                            <label className="block font-medium mb-1">Title</label>
                            <input
                                name="title"
                                value={form.title}
                                onChange={handleChange}
                                placeholder="Short grievance title"
                                className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>

                        {/* CATEGORY */}
                        <div>
                            <label className="block font-medium mb-1">Category</label>
                            <select
                                name="category"
                                value={form.category}
                                onChange={handleChange}
                                className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                            >
                                {categories.map((c) => (
                                    <option key={c}>{c}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* DESCRIPTION */}
                    <div className="mb-6">
                        <label className="block font-medium mb-1">Description</label>
                        <textarea
                            name="description"
                            value={form.description}
                            onChange={handleChange}
                            rows="5"
                            placeholder="Describe your grievance clearly..."
                            className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                        />
                    </div>

                    {/* SUBMIT BUTTON */}
                    <button
                        disabled={submitting}
                        className="bg-[#0a2a66] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#721632] transition disabled:opacity-50"
                    >
                        {submitting ? "Submitting..." : "Submit Grievance"}
                    </button>
                </form>

            </div>
        </div>
    );
}
