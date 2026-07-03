"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PrayerRequest {
  id: number;
  name: string;
  email: string | null;
  phone: string | null;
  request: string;
  language: string | null;
  isRead: string | null;
  createdAt: string | null;
}

export default function AdminPage() {
  const [token, setToken] = useState<string>("");
  const [pastorName, setPastorName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);
  const [requests, setRequests] = useState<PrayerRequest[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState<PrayerRequest | null>(null);

  // Check for existing session
  useEffect(() => {
    const savedToken = sessionStorage.getItem("lwag-admin-token");
    const savedName = sessionStorage.getItem("lwag-admin-name");
    if (savedToken) {
      setToken(savedToken);
      setPastorName(savedName || "");
    }
  }, []);

  // Fetch prayer requests when authenticated
  useEffect(() => {
    if (token) fetchRequests();
  }, [token]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoggingIn(true);
    setLoginError("");

    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Login failed");
      }

      setToken(data.token);
      setPastorName(data.name);
      sessionStorage.setItem("lwag-admin-token", data.token);
      sessionStorage.setItem("lwag-admin-name", data.name);
    } catch (err) {
      setLoginError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoggingIn(false);
    }
  };

  const handleLogout = () => {
    setToken("");
    setPastorName("");
    sessionStorage.removeItem("lwag-admin-token");
    sessionStorage.removeItem("lwag-admin-name");
  };

  const fetchRequests = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/prayer/admin", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (res.ok) {
        setRequests(data.requests);
      }
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  const toggleRead = async (req: PrayerRequest) => {
    try {
      const newRead = req.isRead === "true" ? "false" : "true";
      await fetch("/api/prayer/admin", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ id: req.id, isRead: newRead === "true" }),
      });
      setRequests((prev) =>
        prev.map((r) => (r.id === req.id ? { ...r, isRead: newRead } : r))
      );
    } catch (err) {
      console.error("Toggle error:", err);
    }
  };

  const deleteRequest = async (id: number) => {
    if (!confirm("Are you sure you want to delete this prayer request?")) return;
    try {
      await fetch("/api/prayer/admin", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ id }),
      });
      setRequests((prev) => prev.filter((r) => r.id !== id));
      if (selectedRequest?.id === id) setSelectedRequest(null);
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  const unreadCount = requests.filter((r) => r.isRead !== "true").length;

  // Login Page
  if (!token) {
    return (
      <div className="min-h-screen gradient-hero flex items-center justify-center p-4">
        <div className="particles-overlay">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
              }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 w-full max-w-md"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-rose-500 to-purple-500 rounded-3xl blur-sm opacity-40" />
          <div className="relative glass rounded-3xl p-8 border border-amber-400/20">
            <div className="text-center mb-8">
              <svg
                width="60"
                height="60"
                viewBox="0 0 80 80"
                className="mx-auto cross-vector animate-cross-glow mb-4"
              >
                <defs>
                  <linearGradient id="adminCross" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f5af19" />
                    <stop offset="50%" stopColor="#ffd700" />
                    <stop offset="100%" stopColor="#f12711" />
                  </linearGradient>
                </defs>
                <rect x="32" y="5" width="16" height="70" rx="3" fill="url(#adminCross)" />
                <rect x="15" y="20" width="50" height="16" rx="3" fill="url(#adminCross)" />
              </svg>
              <h1 className="font-heading text-3xl font-bold text-gradient-golden">
                Pastor Admin
              </h1>
              <p className="font-dm text-white/50 text-sm mt-2">
                Private access for prayer requests
              </p>
            </div>

            {loginError && (
              <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-400/20 text-red-400 text-sm text-center">
                {loginError}
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-white/60 text-sm font-dm mb-2">
                  Username
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-dm focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/30 transition-all placeholder:text-white/20"
                  placeholder="Enter username"
                />
              </div>
              <div>
                <label className="block text-white/60 text-sm font-dm mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-dm focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/30 transition-all placeholder:text-white/20"
                  placeholder="Enter password"
                />
              </div>
              <button
                type="submit"
                disabled={loggingIn}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-rose-500 text-white font-semibold text-lg hover:scale-[1.02] transition-transform shadow-lg shadow-amber-500/25 disabled:opacity-50"
              >
                {loggingIn ? "Signing in..." : "Sign In"}
              </button>
            </form>

            <p className="text-center text-white/30 text-xs mt-6 font-dm">
              🔒 This area is restricted to authorized pastoral staff only.
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  // Admin Dashboard
  return (
    <div className="min-h-screen bg-[#0a0a1a]">
      {/* Header */}
      <div className="sticky top-0 z-50 glass-dark border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <svg width="36" height="36" viewBox="0 0 44 44" className="cross-vector">
              <defs>
                <linearGradient id="dashCross" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f5af19" />
                  <stop offset="100%" stopColor="#f12711" />
                </linearGradient>
              </defs>
              <rect x="18" y="4" width="8" height="36" rx="2" fill="url(#dashCross)" />
              <rect x="10" y="12" width="24" height="8" rx="2" fill="url(#dashCross)" />
            </svg>
            <div>
              <h1 className="font-heading text-lg font-bold text-gradient-golden">
                Prayer Requests Admin
              </h1>
              <p className="font-dm text-white/40 text-xs">
                Welcome, {pastorName}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={fetchRequests}
              className="glass px-4 py-2 rounded-xl text-sm font-dm text-white/70 hover:text-white transition-colors"
            >
              🔄 Refresh
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-xl bg-red-500/20 border border-red-400/20 text-red-400 text-sm font-dm hover:bg-red-500/30 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="glass rounded-2xl p-6 border border-amber-400/10">
            <p className="font-dm text-white/40 text-sm">Total Requests</p>
            <p className="font-heading text-3xl font-bold text-gradient-golden">{requests.length}</p>
          </div>
          <div className="glass rounded-2xl p-6 border border-amber-400/10">
            <p className="font-dm text-white/40 text-sm">Unread</p>
            <p className="font-heading text-3xl font-bold text-gradient-fire">{unreadCount}</p>
          </div>
          <div className="glass rounded-2xl p-6 border border-amber-400/10">
            <p className="font-dm text-white/40 text-sm">Read</p>
            <p className="font-heading text-3xl font-bold text-gradient-royal">{requests.length - unreadCount}</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Request List */}
          <div className="flex-1">
            <h2 className="font-heading text-xl font-bold text-white mb-4">
              All Prayer Requests
            </h2>
            {loading ? (
              <div className="text-center py-12">
                <div className="animate-pulse text-white/40 font-dm">Loading...</div>
              </div>
            ) : requests.length === 0 ? (
              <div className="glass rounded-2xl p-12 text-center border border-white/5">
                <p className="text-4xl mb-3">🙏</p>
                <p className="font-dm text-white/50">No prayer requests yet.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {requests.map((req) => (
                  <motion.div
                    key={req.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    onClick={() => setSelectedRequest(req)}
                    className={`glass rounded-2xl p-4 cursor-pointer border transition-all hover:border-amber-400/20 ${
                      req.isRead !== "true"
                        ? "border-amber-400/30 bg-amber-500/5"
                        : "border-white/5"
                    } ${selectedRequest?.id === req.id ? "ring-1 ring-amber-400/30" : ""}`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        {req.isRead !== "true" && (
                          <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                        )}
                        <div>
                          <p className="font-dm text-white font-semibold">
                            {req.name}
                          </p>
                          <p className="font-dm text-white/40 text-xs">
                            {req.createdAt
                              ? new Date(req.createdAt).toLocaleDateString("en-IN", {
                                  day: "numeric",
                                  month: "short",
                                  year: "numeric",
                                  hour: "2-digit",
                                  minute: "2-digit",
                                })
                              : ""}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-dm ${
                          req.isRead === "true"
                            ? "bg-green-500/10 text-green-400 border border-green-400/20"
                            : "bg-amber-500/10 text-amber-400 border border-amber-400/20"
                        }`}>
                          {req.isRead === "true" ? "Read" : "New"}
                        </span>
                      </div>
                    </div>
                    <p className="font-dm text-white/60 text-sm mt-2 line-clamp-2">
                      {req.request}
                    </p>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* Detail Panel */}
          <div className="lg:w-[400px]">
            <AnimatePresence mode="wait">
              {selectedRequest ? (
                <motion.div
                  key={selectedRequest.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="sticky top-24 glass rounded-2xl p-6 border border-amber-400/10"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-heading text-xl font-bold text-gradient-golden">
                      Request Detail
                    </h3>
                    <button
                      onClick={() => setSelectedRequest(null)}
                      className="text-white/40 hover:text-white text-xl"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-white/40 text-xs font-dm uppercase tracking-wider mb-1">Name</p>
                      <p className="text-white font-dm font-semibold">{selectedRequest.name}</p>
                    </div>

                    {selectedRequest.email && (
                      <div>
                        <p className="text-white/40 text-xs font-dm uppercase tracking-wider mb-1">Email</p>
                        <p className="text-amber-400/80 font-dm">{selectedRequest.email}</p>
                      </div>
                    )}

                    {selectedRequest.phone && (
                      <div>
                        <p className="text-white/40 text-xs font-dm uppercase tracking-wider mb-1">Phone</p>
                        <p className="text-amber-400/80 font-dm">{selectedRequest.phone}</p>
                      </div>
                    )}

                    <div>
                      <p className="text-white/40 text-xs font-dm uppercase tracking-wider mb-1">Prayer Request</p>
                      <p className="text-white/80 font-dm leading-relaxed whitespace-pre-wrap">
                        {selectedRequest.request}
                      </p>
                    </div>

                    <div>
                      <p className="text-white/40 text-xs font-dm uppercase tracking-wider mb-1">Submitted</p>
                      <p className="text-white/60 font-dm text-sm">
                        {selectedRequest.createdAt
                          ? new Date(selectedRequest.createdAt).toLocaleString("en-IN")
                          : "Unknown"}
                      </p>
                    </div>

                    <div className="flex gap-2 pt-4 border-t border-white/5">
                      <button
                        onClick={() => toggleRead(selectedRequest)}
                        className={`flex-1 py-2 rounded-xl text-sm font-dm font-semibold transition-all ${
                          selectedRequest.isRead === "true"
                            ? "bg-amber-500/20 border border-amber-400/20 text-amber-400 hover:bg-amber-500/30"
                            : "bg-green-500/20 border border-green-400/20 text-green-400 hover:bg-green-500/30"
                        }`}
                      >
                        {selectedRequest.isRead === "true" ? "Mark Unread" : "Mark Read"}
                      </button>
                      <button
                        onClick={() => deleteRequest(selectedRequest.id)}
                        className="px-4 py-2 rounded-xl text-sm font-dm font-semibold bg-red-500/20 border border-red-400/20 text-red-400 hover:bg-red-500/30 transition-all"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="sticky top-24 glass rounded-2xl p-8 border border-white/5 text-center"
                >
                  <p className="text-3xl mb-3">🙏</p>
                  <p className="font-dm text-white/40">
                    Select a prayer request to view details
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
