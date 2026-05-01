import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import { dbApi } from '../lib/firebase';

export default function Videos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const snap = await dbApi.getDocs(dbApi.collection(dbApi.db, 'videos'));
        const data = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
        setVideos(data);
      } catch (err) {
        console.error('Videos load failed', err);
      }
    };
    load();
  }, []);

  return (
    <div className="container-wide py-12 space-y-6">
      <Helmet>
        <title>Videos | AIMS</title>
        <meta name="description" content="Programs and interview videos." />
      </Helmet>
      <h1 className="text-3xl font-bold">Videos</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {videos.length ? (
          videos.map((vid) => (
            <div key={vid.id} className="card overflow-hidden">
              {vid.youtubeUrl ? (
                <div className="aspect-video">
                  <iframe
                    title={vid.title}
                    src={vid.youtubeUrl.replace('watch?v=', 'embed/')}
                    className="w-full h-full"
                    allowFullScreen
                  />
                </div>
              ) : (
                vid.url && <video src={vid.url} controls className="w-full" />
              )}
              <div className="p-4">
                <h3 className="font-semibold">{vid.title}</h3>
                <p className="text-xs text-gray-500">{vid.date}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No videos yet.</p>
        )}
      </div>
    </div>
  );
}

