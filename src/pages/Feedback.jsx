import { Helmet } from "react-helmet-async";

const feedbackFormUrl = "https://forms.gle/Kp35qkc64BJMFZ3FA";

export default function Feedback() {
  return (
    <>
      <Helmet>
        <title>Feedback Form | AIMS Pune</title>
        <meta
          name="description"
          content="Submit feedback for Aditya Institute of Management through the official feedback form."
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-r from-[#0a2a66] to-blue-700 px-4 py-14 text-white md:py-16">
          <div className="mx-auto max-w-6xl">
            <h1 className="mb-3 text-4xl font-bold md:text-5xl">Feedback Form</h1>
            <p className="max-w-3xl text-base text-blue-100 md:text-lg">
              Share your feedback with Aditya Institute of Management.
            </p>
          </div>
        </section>

        <section className="px-4 py-10 md:py-12">
          <div className="mx-auto max-w-6xl">
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm font-medium text-gray-700">
                If the form does not load, open it directly in a new tab.
              </p>
              <a
                href={feedbackFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-[#0a2a66] px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-800"
              >
                Open Feedback Form
              </a>
            </div>

            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow">
              <iframe
                title="AIMS Feedback Form"
                src={feedbackFormUrl}
                className="h-[760px] w-full"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
