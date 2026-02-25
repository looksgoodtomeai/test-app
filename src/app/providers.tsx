"use client";

import { AppProvider } from "../lib/context";
import { ToastContainer } from "../components/Toast";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AppProvider>
      {children}
      <ToastContainer />
    </AppProvider>
  );
}
