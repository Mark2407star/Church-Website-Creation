"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

type PrayerRequest = {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  prayerRequest: string;
  isUrgent: boolean;
  isRead: boolean;
  createdAt: string;
};

export default function AdminDashboard() {
  const router = useRouter();
  const [requests, setRequests] = useState<PrayerRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedRequest, setSelectedRequest] = useState<PrayerRequest | null>(null);

  const fetchRequests = useCallback(async () => {
    try {
      const res = await fetch("/api/admin/prayer-requests");
      if (res.status === 401) {
        router.push("/admin/login");
        return;
      }
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setRequests(data.requests);
    } catch {
      setError("Failed to load prayer requests.");
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    fetchRequests();
  }, [fetchRequests]);

  const markAsRead = async (id: number, current: boolean) => {
    try {
      await fetch("/api/admin/prayer-requests", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, isRead: !current }),
      });
      setRequests((prev) =>
        prev.map((r) => (r.id === id ? { ...r, isRead: !current } : r))
      );
      if (selectedRequest?.id === id) {
        setSelectedRequest((prev) => (prev ? { ...prev, isRead: !current } : null));
      }
    } catch {
      // silent
    }
  };

  const deleteRequest = async (id: number) => {
    if (!confirm("Are you sure you want to delete this prayer request?")) return;
    try {
      await fetch(`/api/admin/prayer-requests?id=${id}`, { method: "DELETE" });
      setRequests((prev) => prev.filter((r) => r.id !== id));
      if (selectedRequest?.id === id) setSelectedRequest(null);
    } catch {
      // silent
    }
  };

  const unreadCount = requests.filter((r) => !r.isRead).length;
  const urgentCount = requests.filter((r) => r.isUrgent && !r.isRead).length;

  if (loading) {
    return (
      <div className="pt-32 pb-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-10 h-10 border-2 border-gold/30 border-t-gold rounded-full animate-spin mx-auto mb-5" />
          <p className="text-indigo-300/40 font-jost text-sm">Loading prayer requests...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="font-cormorant font-bold text-5xl sm:text-6xl gradient-text mb-3 tracking-tight">
              Prayer Requests
            </h1>
            <p className="text-indigo-300/40 font-jost text-sm">Pastor&apos;s Private Dashboard</p>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex gap-3">
              {urgentCount > 0 && (
                <span className="px-4 py-2 rounded-full bg-red-500/12 border border-red-500/20 text-red-300 text-xs font-jost font-semibold tracking-wide">
                  {urgentCount} Urgent
                </span>
              )}
              <span className="px-4 py-2 rounded-full bg-gold/12 border border-gold/20 text-gold-light text-xs font-jost font-semibold tracking-wide">
                {unreadCount} Unread
              </span>
              <span className="px-4 py-2 rounded-full bg-white/3 border border-white/8 text-indigo-300/50 text-xs font-jost tracking-wide">
                {requests.length} Total
              </span>
            </div>
            <button
              onClick={fetchRequests}
              className="px-5 py-2.5 rounded-xl glass-card text-indigo-200/50 text-sm font-jost hover:text-indigo-100 hover:bg-white/8 transition-all"
            >
              Refresh
            </button>
          </div>
        </div>

        {error && (
          <div className="mb-8 p-4 rounded-xl bg-red-500/8 border border-red-500/20 text-red-300 text-sm font-jost">
            {error}
          </div>
        )}

        {requests.length === 0 ? (
          <div className="glass-card p-20 text-center">
            <div className="w-20 h-20 mx-auto mb-7 rounded-full bg-white/5 flex items-center justify-center">
              <Image src="/images/prayer-hands-vector.png" alt="" width={40} height={40} className="opacity-40" />
            </div>
            <h3 className="font-cormorant font-bold text-2xl text-indigo-100 mb-3 tracking-tight">
              No Prayer Requests Yet
            </h3>
            <p className="text-indigo-300/40 font-jost text-sm">
              When someone submits a prayer request, it will appear here.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* List */}
            <div className="lg:col-span-1 space-y-3.5 max-h-[70vh] overflow-y-auto pr-2">
              {requests.map((req) => (
                <button
                  key={req.id}
                  onClick={() => setSelectedRequest(req)}
                  className={`w-full text-left p-5 rounded-xl transition-all ${
                    selectedRequest?.id === req.id
                      ? "glass-card ring-1 ring-gold/30 bg-white/8"
                      : "glass-card hover:bg-white/6"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p
                        className={`text-sm font-jost font-medium truncate ${
                          req.isRead ? "text-indigo-300/45" : "text-indigo-100"
                        }`}
                      >
                        {req.name}
                        {!req.isRead && (
                          <span className="ml-2 inline-block w-2 h-2 rounded-full bg-gold" />
                        )}
                      </p>
                      <p className="text-xs text-indigo-400/40 mt-1.5 truncate font-jost">
                        {req.prayerRequest.slice(0, 55)}...
                      </p>
                    </div>
                    {req.isUrgent && (
                      <span className="w-2 h-2 rounded-full bg-red-400 shrink-0 mt-1" />
                    )}
                  </div>
                  <p className="text-[10px] text-indigo-400/25 mt-3 font-jost tracking-wide">
                    {new Date(req.createdAt).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </button>
              ))}
            </div>

            {/* Detail */}
            <div className="lg:col-span-2">
              {selectedRequest ? (
                <div className="glass-card p-10">
                  <div className="flex items-start justify-between mb-8 flex-wrap gap-4">
                    <div>
                      <h3 className="font-cormorant font-bold text-2xl text-gold-light tracking-wide">
                        {selectedRequest.name}
                      </h3>
                      <p className="text-indigo-300/45 font-jost text-sm mt-2">
                        {selectedRequest.email}
                        {selectedRequest.phone && (
                          <span> &middot; {selectedRequest.phone}</span>
                        )}
                      </p>
                    </div>
                    <div className="flex items-center gap-2.5">
                      {selectedRequest.isUrgent && (
                        <span className="px-4 py-1.5 rounded-full bg-red-500/12 border border-red-500/20 text-red-300 text-xs font-jost font-semibold tracking-wide">
                          Urgent
                        </span>
                      )}
                      <span
                        className={`px-4 py-1.5 rounded-full text-xs font-jost font-semibold tracking-wide ${
                          selectedRequest.isRead
                            ? "bg-green-500/10 border border-green-500/20 text-green-300"
                            : "bg-gold/12 border border-gold/20 text-gold-light"
                        }`}
                      >
                        {selectedRequest.isRead ? "Read" : "Unread"}
                      </span>
                    </div>
                  </div>

                  <div className="p-7 rounded-xl bg-white/3 border border-white/6 mb-8">
                    <p className="text-indigo-100 leading-relaxed whitespace-pre-wrap font-jost font-light">
                      {selectedRequest.prayerRequest}
                    </p>
                  </div>

                  <p className="text-indigo-400/30 text-xs font-jost mb-8 tracking-wide">
                    Submitted on{" "}
                    {new Date(selectedRequest.createdAt).toLocaleDateString("en-IN", {
                      weekday: "long",
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>

                  <div className="flex gap-4">
                    <button
                      onClick={() => markAsRead(selectedRequest.id, selectedRequest.isRead)}
                      className="px-6 py-3 rounded-xl bg-white/3 border border-white/8 text-indigo-200/70 text-sm font-jost hover:bg-white/8 transition-all"
                    >
                      {selectedRequest.isRead ? "Mark as Unread" : "Mark as Read"}
                    </button>
                    <button
                      onClick={() => deleteRequest(selectedRequest.id)}
                      className="px-6 py-3 rounded-xl bg-red-500/8 border border-red-500/15 text-red-300 text-sm font-jost hover:bg-red-500/15 transition-all"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ) : (
                <div className="glass-card p-20 text-center h-full flex items-center justify-center">
                  <div>
                    <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-white/5 flex items-center justify-center">
                      <Image src="/images/prayer-hands-vector.png" alt="" width={32} height={32} className="opacity-35" />
                    </div>
                    <p className="text-indigo-300/30 font-jost text-sm">
                      Select a prayer request to view details
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
