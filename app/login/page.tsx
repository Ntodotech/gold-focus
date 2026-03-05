"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import logo from "@/public/logo.webp";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { supabase } from "@/lib/supabase/client";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);



  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Login Form - Centered */}
      <section className="flex-1 flex items-center justify-center px-6 py-30">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {/* Login Title */}
            <div className="max-w-md mx-auto mb-10 flex items-center justify-center gap-3">
              <Image src={logo} alt="Gold Focus Logo" width={65} height={18} className="w-auto" />
            </div>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800">Login</h2>
              <p className="text-gray-500 mt-2"> login to your account</p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-3 text-sm text-red-600 bg-red-50 rounded-lg mb-4">
                {error}
              </div>
            )}

            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-5">
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                />
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                />
              </div>

              {/* Login Button */}
              <Button 
                type="submit"
                disabled={loading}
                className="w-full h-12 text-white rounded-md text-base font-semibold bg-amber-400 hover:bg-amber-500 disabled:opacity-50"
              >
                {loading ? "Logging in..." : "Login"}
              </Button>

              {/* Demo Login Button */}
              {/* <Button 
                type="button"
                variant="outline"
                onClick={handleDemoLogin}
                className="w-full h-12 text-amber-600 border-amber-400 hover:bg-amber-50"
              >
                Use Demo Account
              </Button> */}
            </form>

            {/* Forgot Password Link */}
            {/* <div className="mt-6 text-center">
              <a href="#" className="text-sm text-amber-600 hover:text-amber-700 font-medium">
                Forgot your password?
              </a>
            </div> */}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
