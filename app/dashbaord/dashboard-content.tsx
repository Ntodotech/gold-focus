"use client";

import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { supabase } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

type User = {
  id: string;
  email?: string;
};

export function DashboardContent({ user }: { user: User }) {
  const router = useRouter();
  const supabaseClient = supabase;

  const handleSignOut = async () => {
    await supabaseClient.auth.signOut();
    router.push("/login");
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Dashboard</h1>
          <p className="text-gray-600 mb-8">
            Welcome! You are logged in as: <span className="font-medium">{user.email}</span>
          </p>
          
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
            <div className="flex gap-4">
              <button
                onClick={handleSignOut}
                className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
