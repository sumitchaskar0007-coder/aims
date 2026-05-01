import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { dbApi } from '../lib/firebase';

export default function AnnouncementTicker() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const snap = await dbApi.getDocs(dbApi.collection(dbApi.db, 'announcements'));
        const data = snap.docs
          .map((d) => ({ id: d.id, ...d.data() }))
          .sort((a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0));
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
              <Link key={item.id} to={item.link || '#'} className="mr-8 hover:underline">
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

