import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="flex w-screen max-w-screen justify-between self-center flex-1">
        <Sidebar />
        <main className="flex flex-1 items-center justify-center flex-col relative bg-white">
          {children}
        </main>
      </div>
    </>
  );
}
