import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API from '../api';

export default function AnnouncementTicker() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const response = await API.get('/announcements');
        const data = response.data
          .slice()
          .sort((a, b) => new Date(b.date) - new Date(a.date));
        setItems(data);
      } catch (err) {
        console.error('Announcements load failed', err);
      }
    };
    load();
  }, []);

  if (!items.length) return null;

  return (
    <div className="bg-accent text-dark text-sm py-2 px-4 overflow-hidden">
      <div className="container-wide flex items-center gap-4">
        <span className="font-semibold uppercase tracking-wide">Announcements</span>
        <div className="flex-1 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap">
            {items.map((item) => (
              <Link key={item._id} to={item.link || '/announcements'} className="mr-8 hover:underline">
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <style>
        {`
        .animate-marquee {
          display: inline-block;
          animation: marquee 18s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}
      </style>
    </div>
  );
}

