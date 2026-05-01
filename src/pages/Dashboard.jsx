import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import { dbApi } from '../lib/firebase';
import { useAuth } from '../state/AuthContext';

const serverBase = import.meta.env.VITE_SERVER_BASE_URL;

export default function Dashboard() {
  const { logout } = useAuth();
  const [announcements, setAnnouncements] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [events, setEvents] = useState([]);
  const [announcementForm, setAnnouncementForm] = useState({ title: '', link: '' });
  const [eventForm, setEventForm] = useState({ title: '', date: '', description: '', image: '' });
  const [galleryForm, setGalleryForm] = useState({ title: '', date: '', file: null });
  const [pdf, setPdf] = useState({ title: '', url: '' });
  const [loading, setLoading] = useState(false);

  const loadData = async () => {
    const [annSnap, galSnap, eventSnap] = await Promise.all([
      dbApi.getDocs(dbApi.collection(dbApi.db, 'announcements')),
      dbApi.getDocs(dbApi.collection(dbApi.db, 'gallery')),
      dbApi.getDocs(dbApi.collection(dbApi.db, 'events')),
    ]);
    setAnnouncements(annSnap.docs.map((d) => ({ id: d.id, ...d.data() })));
    setGallery(galSnap.docs.map((d) => ({ id: d.id, ...d.data() })));
    setEvents(eventSnap.docs.map((d) => ({ id: d.id, ...d.data() })));
  };

  useEffect(() => {
    loadData().catch(console.error);
  }, []);

  const addAnnouncement = async (e) => {
    e.preventDefault();
    await dbApi.addDoc(dbApi.collection(dbApi.db, 'announcements'), {
      ...announcementForm,
      createdAt: dbApi.serverTimestamp(),
    });
    setAnnouncementForm({ title: '', link: '' });
    loadData();
  };

  const deleteAnnouncement = async (id) => {
    await dbApi.deleteDoc(dbApi.doc(dbApi.db, 'announcements', id));
    loadData();
  };

  const addEvent = async (e) => {
    e.preventDefault();
    await dbApi.addDoc(dbApi.collection(dbApi.db, 'events'), { ...eventForm, createdAt: dbApi.serverTimestamp() });
    setEventForm({ title: '', date: '', description: '', image: '' });
    loadData();
  };

  const uploadGallery = async (e) => {
    e.preventDefault();
    if (!galleryForm.file) return;
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('file', galleryForm.file);
      const res = await axios.post(`${serverBase}/api/upload/image`, formData);
      await dbApi.addDoc(dbApi.collection(dbApi.db, 'gallery'), {
        title: galleryForm.title,
        date: galleryForm.date,
        url: res.data.secure_url,
        createdAt: dbApi.serverTimestamp(),
      });
      setGalleryForm({ title: '', date: '', file: null });
      loadData();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const savePdf = async (e) => {
    e.preventDefault();
    await dbApi.addDoc(dbApi.collection(dbApi.db, 'naac'), {
      title: pdf.title,
      url: pdf.url,
      createdAt: dbApi.serverTimestamp(),
    });
    setPdf({ title: '', url: '' });
  };

  return (
    <div className="container-wide py-10 space-y-10">
      <Helmet>
        <title>Admin Dashboard | AIMS</title>
      </Helmet>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <button className="btn" onClick={logout}>
          Logout
        </button>
      </div>

      <section className="card p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Announcements</h2>
        </div>
        <form className="grid gap-3 md:grid-cols-3" onSubmit={addAnnouncement}>
          <input
            className="rounded-md border px-3 py-2"
            placeholder="Title"
            value={announcementForm.title}
            onChange={(e) => setAnnouncementForm((f) => ({ ...f, title: e.target.value }))}
            required
          />
          <input
            className="rounded-md border px-3 py-2"
            placeholder="Link (optional)"
            value={announcementForm.link}
            onChange={(e) => setAnnouncementForm((f) => ({ ...f, link: e.target.value }))}
          />
          <button className="btn btn-primary" type="submit">
            Add
          </button>
        </form>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {announcements.map((a) => (
            <div key={a.id} className="flex items-center justify-between rounded-md border px-3 py-2">
              <div>
                <p className="font-semibold">{a.title}</p>
                {a.link && (
                  <a href={a.link} className="text-xs text-primary" target="_blank" rel="noreferrer">
                    {a.link}
                  </a>
                )}
              </div>
              <button className="text-red-600 text-sm" onClick={() => deleteAnnouncement(a.id)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="card p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Gallery Upload (Cloudinary)</h2>
          {loading && <span className="text-sm text-gray-600">Uploading...</span>}
        </div>
        <form className="grid gap-3 md:grid-cols-4" onSubmit={uploadGallery}>
          <input
            className="rounded-md border px-3 py-2"
            placeholder="Title"
            value={galleryForm.title}
            onChange={(e) => setGalleryForm((f) => ({ ...f, title: e.target.value }))}
            required
          />
          <input
            className="rounded-md border px-3 py-2"
            placeholder="Date"
            value={galleryForm.date}
            onChange={(e) => setGalleryForm((f) => ({ ...f, date: e.target.value }))}
          />
          <input
            type="file"
            accept="image/*"
            className="rounded-md border px-3 py-2"
            onChange={(e) => setGalleryForm((f) => ({ ...f, file: e.target.files?.[0] }))}
            required
          />
          <button className="btn btn-primary" type="submit" disabled={loading}>
            Upload
          </button>
        </form>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {gallery.map((img) => (
            <div key={img.id} className="rounded-lg border overflow-hidden">
              <img src={img.url} alt={img.title} className="h-32 w-full object-cover" />
              <div className="p-3">
                <p className="font-semibold text-sm">{img.title}</p>
                <p className="text-xs text-gray-500">{img.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="card p-6 space-y-4">
        <h2 className="text-xl font-semibold">Events & Programs</h2>
        <form className="grid gap-3 md:grid-cols-4" onSubmit={addEvent}>
          <input
            className="rounded-md border px-3 py-2"
            placeholder="Title"
            value={eventForm.title}
            onChange={(e) => setEventForm((f) => ({ ...f, title: e.target.value }))}
            required
          />
          <input
            className="rounded-md border px-3 py-2"
            placeholder="Date"
            value={eventForm.date}
            onChange={(e) => setEventForm((f) => ({ ...f, date: e.target.value }))}
          />
          <input
            className="rounded-md border px-3 py-2"
            placeholder="Image URL"
            value={eventForm.image}
            onChange={(e) => setEventForm((f) => ({ ...f, image: e.target.value }))}
          />
          <textarea
            className="md:col-span-4 rounded-md border px-3 py-2"
            rows="3"
            placeholder="Description"
            value={eventForm.description}
            onChange={(e) => setEventForm((f) => ({ ...f, description: e.target.value }))}
            required
          />
          <button className="btn btn-primary md:col-span-1" type="submit">
            Save Event
          </button>
        </form>
        <div className="grid gap-3 md:grid-cols-3">
          {events.map((ev) => (
            <div key={ev.id} className="rounded-md border p-3 space-y-1">
              <p className="text-xs uppercase text-primary font-semibold">{ev.date}</p>
              <p className="font-semibold">{ev.title}</p>
              <p className="text-sm text-gray-700 line-clamp-3">{ev.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="card p-6 space-y-3">
        <h2 className="text-xl font-semibold">PDF Manager (Syllabus / Prospectus / NAAC)</h2>
        <form className="grid gap-3 md:grid-cols-3" onSubmit={savePdf}>
          <input
            className="rounded-md border px-3 py-2"
            placeholder="Title"
            value={pdf.title}
            onChange={(e) => setPdf((f) => ({ ...f, title: e.target.value }))}
            required
          />
          <input
            className="rounded-md border px-3 py-2"
            placeholder="PDF URL"
            value={pdf.url}
            onChange={(e) => setPdf((f) => ({ ...f, url: e.target.value }))}
            required
          />
          <button className="btn btn-primary" type="submit">
            Save PDF
          </button>
        </form>
        <p className="text-sm text-gray-600">
          Upload files to Cloudinary or Firebase Storage, paste the secure URL here. Link course PDFs to `courses`
          collection via Firestore manually or extend this form.
        </p>
      </section>
    </div>
  );
}

