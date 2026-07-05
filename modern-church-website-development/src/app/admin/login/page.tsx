"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Invalid credentials");
        setLoading(false);
        return;
      }

      router.push("/admin");
    } catch {
      setError("Something went wrong. Try again.");
      setLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-20 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full mx-auto px-8">
        <div className="glass-card p-12">
          <div className="text-center mb-10">
            <div className="w-20 h-20 mx-auto mb-7 rounded-full bg-white/5 flex items-center justify-center">
              <Image
                src="/images/cross-vector.png"
                alt="Pastor Access"
                width={40}
                height={40}
                className="opacity-70"
              />
            </div>
            <h1 className="font-cormorant font-bold text-3xl gradient-text mb-3 tracking-tight">
              Pastor Access
            </h1>
            <p className="text-indigo-300/45 font-jost text-sm">
              Private admin area for prayer requests
            </p>
          </div>

          {error && (
            <div className="mb-7 p-4 rounded-xl bg-red-500/8 border border-red-500/20 text-red-300 text-sm font-jost text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-indigo-200/70 text-sm font-jost font-medium mb-2.5">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-5 py-3.5 rounded-xl bg-white/3 border border-white/8 text-indigo-100 placeholder-indigo-400/30 focus:outline-none focus:border-gold/40 focus:bg-white/6 transition-all font-jost text-sm"
                placeholder="Enter username"
                required
              />
            </div>

            <div>
              <label className="block text-indigo-200/70 text-sm font-jost font-medium mb-2.5">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-5 py-3.5 rounded-xl bg-white/3 border border-white/8 text-indigo-100 placeholder-indigo-400/30 focus:outline-none focus:border-gold/40 focus:bg-white/6 transition-all font-jost text-sm"
                placeholder="Enter password"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4.5 rounded-xl bg-gradient-to-r from-gold to-amber-500 text-deep-indigo font-jost font-bold text-base tracking-wide shadow-2xl shadow-amber-600/15 hover:shadow-amber-500/25 transition-all disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <p className="mt-8 text-center text-indigo-300/25 font-jost text-xs">
            This area is restricted to authorized church leadership only.
          </p>
        </div>
      </div>
    </div>
  );
}
