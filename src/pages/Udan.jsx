import { Helmet } from "react-helmet-async";

export default function Udan() {
  const udanList = [
    { id: 1, title: "UDAN 1", url: "/pdf/Udan1.pdf" },
    { id: 2, title: "UDAN 2", url: "/pdf/Udan2.pdf" },
    { id: 3, title: "UDAN 3", url: "/pdf/Udan3.pdf" },
    { id: 4, title: "UDAN 4", url: "/pdf/Udan4.pdf" },
    { id: 5, title: "UDAN 5", url: "/pdf/Udan5.pdf" },
    { id: 6, title: "UDAN 6", url: "/pdf/Udan6.pdf" },
    { id: 7, title: "UDAN 7", url: "/pdf/Udan7.pdf" },
    { id: 8, title: "UDAN 8", url: "/pdf/Udan8.pdf" },
  ];

  return (
    <>
      <Helmet>
        <title>UDAN | AIMS</title>
      </Helmet>

      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 pt-30">
        <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-13">

          <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            UDAN Books
          </h1>

          <ul className="space-y-4">
            {udanList.map((item) => (
              <li
                key={item.id}
                onClick={() => window.open(item.url, "_blank")}
                className="flex items-center justify-between px-4 py-3 rounded-lg border border-gray-200 cursor-pointer hover:bg-primary hover:text-white transition"
              >
                <span className="font-semibold">{item.title}</span>
                <span className="text-sm">Open →</span>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </>
  );
}
