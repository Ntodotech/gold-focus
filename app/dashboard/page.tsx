import { Sidebar } from "@/components/dashboard/sidebar";
import { DashboardHeader } from "@/components/dashboard/header";
import { StatCards } from "@/components/dashboard/stat-cards";
import { InvestmentChart } from "@/components/dashboard/investment-chart";
import { TransactionsTable } from "@/components/dashboard/transactions-table";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const supabase = await createClient();
  
  // Get the current user
  const { data: { user }, error } = await supabase.auth.getUser();
  
  // Redirect to login if not authenticated
  if (error || !user) {
    redirect("/login");
  }

  // Extract name from email (part before @)
  const userName = user.email?.split("@")[0] || "User";
  // Capitalize first letter
  const displayName = userName.charAt(0).toUpperCase() + userName.slice(1);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-64">
        {/* Header */}
        <DashboardHeader userName={displayName} userEmail={user.email || ""} />

        {/* Dashboard Content */}
        <main className="p-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome back, {displayName}! 👋
            </h1>
            <p className="text-gray-600">
              Here&apos;s what&apos;s happening with your investments today.
            </p>
          </div>

          {/* Stat Cards */}
          <StatCards />

          {/* Investment Chart */}
          <InvestmentChart />

          {/* Transactions Table */}
          <TransactionsTable />
        </main>
      </div>
    </div>
  );
}
