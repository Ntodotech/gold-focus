"use client";

import { ArrowUpRight, ArrowDownRight } from "lucide-react";

interface Transaction {
  id: string;
  date: string;
  type: "buy" | "sell";
  asset: string;
  amount: string;
  price: string;
  total: string;
  status: "completed" | "pending" | "failed";
}

const transactions: Transaction[] = [
  {
    id: "TXN001",
    date: "2024-03-20",
    type: "buy",
    asset: "Gold Bars (1oz)",
    amount: "5",
    price: "$2,045.50",
    total: "$10,227.50",
    status: "completed",
  },
  {
    id: "TXN002",
    date: "2024-03-19",
    type: "sell",
    asset: "Gold Coins",
    amount: "10",
    price: "$2,040.00",
    total: "$20,400.00",
    status: "completed",
  },
  {
    id: "TXN003",
    date: "2024-03-18",
    type: "buy",
    asset: "Gold Bars (10oz)",
    amount: "2",
    price: "$20,450.00",
    total: "$40,900.00",
    status: "pending",
  },
  {
    id: "TXN004",
    date: "2024-03-17",
    type: "buy",
    asset: "Gold Jewelry",
    amount: "3",
    price: "$1,850.00",
    total: "$5,550.00",
    status: "completed",
  },
  {
    id: "TXN005",
    date: "2024-03-16",
    type: "sell",
    asset: "Gold Bars (1oz)",
    amount: "8",
    price: "$2,038.75",
    total: "$16,310.00",
    status: "completed",
  },
  {
    id: "TXN006",
    date: "2024-03-15",
    type: "buy",
    asset: "Gold Coins",
    amount: "15",
    price: "$2,042.00",
    total: "$30,630.00",
    status: "failed",
  },
  {
    id: "TXN007",
    date: "2024-03-14",
    type: "buy",
    asset: "Gold Bars (5oz)",
    amount: "4",
    price: "$10,225.00",
    total: "$40,900.00",
    status: "completed",
  },
  {
    id: "TXN008",
    date: "2024-03-13",
    type: "sell",
    asset: "Gold Jewelry",
    amount: "2",
    price: "$1,875.00",
    total: "$3,750.00",
    status: "completed",
  },
];

export function TransactionsTable() {
  const getStatusColor = (status: Transaction["status"]) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "failed":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Recent Transactions</h2>
        <p className="text-gray-600">Your latest gold trading activities</p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Transaction ID
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Asset
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Total
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {transactions.map((transaction) => (
              <tr 
                key={transaction.id} 
                className="hover:bg-gray-50 transition-colors duration-150"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm font-medium text-gray-900">
                    {transaction.id}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-gray-600">{transaction.date}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-2">
                    {transaction.type === "buy" ? (
                      <div className="flex items-center space-x-1 text-green-600">
                        <ArrowDownRight className="w-4 h-4" />
                        <span className="text-sm font-semibold">Buy</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-1 text-red-600">
                        <ArrowUpRight className="w-4 h-4" />
                        <span className="text-sm font-semibold">Sell</span>
                      </div>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-gray-900">{transaction.asset}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-gray-900">{transaction.amount}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm font-medium text-gray-900">
                    {transaction.price}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm font-bold text-gray-900">
                    {transaction.total}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                      transaction.status
                    )}`}
                  >
                    {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
