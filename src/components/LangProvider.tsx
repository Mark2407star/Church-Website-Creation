"use client";

import { useState, useEffect, createContext, useContext } from "react";

type Lang = "en" | "ta";
const LangContext = createContext<Lang>("en");

export function useLang() {
  return useContext(LangContext);
}

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("lwag-lang") as Lang | null;
    if (saved) setLang(saved);
    const handler = (e: Event) => setLang((e as CustomEvent).detail as Lang);
    window.addEventListener("lang-change", handler);
    return () => window.removeEventListener("lang-change", handler);
  }, []);

  return <LangContext.Provider value={lang}>{children}</LangContext.Provider>;
}
