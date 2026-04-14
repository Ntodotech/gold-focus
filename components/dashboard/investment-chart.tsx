"use client";

import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { applyDailyGrowth } from "@/lib/daily-growth";

const baseData = [
  { month: "Jan", investment: 45000, returns: 42000, profit: 3000 },
  { month: "Feb", investment: 52000, returns: 49500, profit: 2500 },
  { month: "Mar", investment: 48000, returns: 51000, profit: 3000 },
  { month: "Apr", investment: 61000, returns: 58000, profit: 3000 },
  { month: "May", investment: 55000, returns: 60000, profit: 5000 },
  { month: "Jun", investment: 67000, returns: 65000, profit: 2000 },
  { month: "Jul", investment: 69000, returns: 73000, profit: 4000 },
  { month: "Aug", investment: 75000, returns: 78000, profit: 3000 },
  { month: "Sep", investment: 82000, returns: 86000, profit: 4000 },
  { month: "Oct", investment: 88000, returns: 92000, profit: 4000 },
  { month: "Nov", investment: 95000, returns: 99000, profit: 4000 },
  { month: "Dec", investment: 102000, returns: 108000, profit: 6000 },
];

interface InvestmentChartProps {
  userName: string;
}

export function InvestmentChart({ userName }: InvestmentChartProps) {
  const basePortfolio = 3892450;
  const targetPortfolio = userName === "hushmoney" ? 5000000 : 300000;
  const scale = targetPortfolio / basePortfolio;
  const growthRate = 0.025; // 2.5% daily growth

  const data = baseData.map((item, index) => {
    const monthMultiplier = Math.pow(1 + growthRate, index * 30); // Approximate 30 days per month
    return {
      ...item,
      investment: applyDailyGrowth(
        Math.round(item.investment * scale * monthMultiplier),
        growthRate,
        `chart_investment_${userName}_${index}`,
        `chart_investment_date_${userName}_${index}`
      ),
      returns: applyDailyGrowth(
        Math.round(item.returns * scale * monthMultiplier),
        growthRate,
        `chart_returns_${userName}_${index}`,
        `chart_returns_date_${userName}_${index}`
      ),
      profit: applyDailyGrowth(
        Math.round(item.profit * scale * monthMultiplier),
        growthRate,
        `chart_profit_${userName}_${index}`,
        `chart_profit_date_${userName}_${index}`
      ),
    };
  });
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-100">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Investment Performance</h2>
        <p className="text-gray-600">Monthly investment trends and returns overview</p>
      </div>
      
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorInvestment" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.1}/>
            </linearGradient>
            <linearGradient id="colorReturns" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#10b981" stopOpacity={0.1}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis 
            dataKey="month" 
            stroke="#6b7280"
            style={{ fontSize: '14px', fontWeight: '500' }}
          />
          <YAxis
            stroke="#6b7280"
            style={{ fontSize: '14px', fontWeight: '500' }}
            tickFormatter={(value) => `£${(value / 1000).toFixed(0)}k`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
            formatter={(value) =>
              typeof value === 'number' ? `£${value.toLocaleString()}` : value
            }
          />
          <Legend 
            wrapperStyle={{ paddingTop: '20px' }}
            iconType="circle"
          />
          <Area 
            type="monotone" 
            dataKey="investment" 
            stroke="#f59e0b" 
            strokeWidth={3}
            fillOpacity={1} 
            fill="url(#colorInvestment)" 
            name="Investment"
          />
          <Area 
            type="monotone" 
            dataKey="returns" 
            stroke="#10b981" 
            strokeWidth={3}
            fillOpacity={1} 
            fill="url(#colorReturns)" 
            name="Returns"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
