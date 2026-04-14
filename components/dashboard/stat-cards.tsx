"use client";

import { TrendingUp, TrendingDown, DollarSign, Users, Wallet, BarChart3 } from "lucide-react";
import { applyDailyGrowth } from "@/lib/daily-growth";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
}

function StatCard({ title, value, change, isPositive, icon }: StatCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 bg-gradient-to-br from-amber-400 to-amber-500 rounded-lg shadow-md">
          {icon}
        </div>
        <div className={`flex items-center space-x-1 text-sm font-semibold ${
          isPositive ? "text-green-600" : "text-red-600"
        }`}>
          {isPositive ? (
            <TrendingUp className="w-4 h-4" />
          ) : (
            <TrendingDown className="w-4 h-4" />
          )}
          <span>{change}</span>
        </div>
      </div>
      <h3 className="text-gray-600 text-sm font-medium mb-1">{title}</h3>
      <p className="text-3xl font-bold text-gray-900">{value}</p>
    </div>
  );
}

interface StatCardsProps {
  userName: string;
}

export function StatCards({ userName }: StatCardsProps) {
  const basePortfolio = 3892450; // original $3,892,450
  const targetPortfolio = userName === "hushmoney" ? 590000 : 306000;
  const scale = targetPortfolio / basePortfolio;

  const baseTotalInvestment = 2456890;
  const baseMonthlyReturns = 145230;

  // Apply daily growth of 2.5% to scaled values
  const growthRate = 0.025; // 2.5% daily growth
  const scaledTotalInvestment = applyDailyGrowth(
    Math.round(baseTotalInvestment * scale),
    growthRate,
    `totalInvestment_${userName}`,
    `totalInvestmentDate_${userName}`
  );
  const scaledPortfolio = applyDailyGrowth(
    Math.round(targetPortfolio),
    growthRate,
    `portfolioValue_${userName}`,
    `portfolioValueDate_${userName}`
  );
  const scaledMonthlyReturns = applyDailyGrowth(
    Math.round(baseMonthlyReturns * scale),
    growthRate,
    `monthlyReturns_${userName}`,
    `monthlyReturnsDate_${userName}`
  );

  const stats = [
    {
      title: "Total Investment",
      value: `£${scaledTotalInvestment.toLocaleString()}`,
      change: "+12.5%",
      isPositive: true,
      icon: <DollarSign className="w-6 h-6 text-white" />,
    },
    {
      title: "Portfolio Value",
      value: `£${scaledPortfolio.toLocaleString()}`,
      change: "+15.3%",
      isPositive: true,
      icon: <Wallet className="w-6 h-6 text-white" />,
    },
    {
      title: "Monthly Returns",
      value: `£${scaledMonthlyReturns.toLocaleString()}`,
      change: "-2.4%",
      isPositive: false,
      icon: <BarChart3 className="w-6 h-6 text-white" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
}
