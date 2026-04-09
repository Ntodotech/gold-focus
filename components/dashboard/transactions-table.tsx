"use client";

import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { useState } from "react";

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

interface TransactionsTableProps {
  userName: string;
}

const transactions: Transaction[] = [
  {
    id: "TXN001",
    date: "2024-03-20",
    type: "buy",
    asset: "Gold Bars (1oz)",
    amount: "5",
    price: "£2,045.50",
    total: "£10,227.50",
    status: "completed",
  },
  {
    id: "TXN002",
    date: "2024-03-19",
    type: "sell",
    asset: "Gold Coins",
    amount: "10",
    price: "£2,040.00",
    total: "£20,400.00",
    status: "completed",
  },
  {
    id: "TXN003",
    date: "2024-03-18",
    type: "buy",
    asset: "Gold Bars (10oz)",
    amount: "2",
    price: "£20,450.00",
    total: "£40,900.00",
    status: "pending",
  },
  {
    id: "TXN004",
    date: "2024-03-17",
    type: "buy",
    asset: "Gold Jewelry",
    amount: "3",
    price: "£1,850.00",
    total: "£5,550.00",
    status: "completed",
  },
  {
    id: "TXN005",
    date: "2024-03-16",
    type: "sell",
    asset: "Gold Bars (1oz)",
    amount: "8",
    price: "£2,038.75",
    total: "£16,310.00",
    status: "completed",
  },
  {
    id: "TXN006",
    date: "2024-03-15",
    type: "buy",
    asset: "Gold Coins",
    amount: "15",
    price: "£2,042.00",
    total: "£30,630.00",
    status: "failed",
  },
  {
    id: "TXN007",
    date: "2024-03-14",
    type: "buy",
    asset: "Gold Bars (5oz)",
    amount: "4",
    price: "£10,225.00",
    total: "£40,900.00",
    status: "completed",
  },
  {
    id: "TXN008",
    date: "2024-03-13",
    type: "sell",
    asset: "Gold Jewelry",
    amount: "2",
    price: "£1,875.00",
    total: "£3,750.00",
    status: "completed",
  },
  // Adding more transactions to span 10 years with at least 8 per year
  // 2023
  {
    id: "TXN009",
    date: "2023-01-15",
    type: "buy",
    asset: "Gold Bars (1oz)",
    amount: "12",
    price: "£1,950.00",
    total: "£23,400.00",
    status: "completed",
  },
  {
    id: "TXN010",
    date: "2023-03-22",
    type: "sell",
    asset: "Gold Coins",
    amount: "20",
    price: "£1,820.00",
    total: "£36,400.00",
    status: "completed",
  },
  {
    id: "TXN011",
    date: "2023-05-10",
    type: "buy",
    asset: "Gold Bars (10oz)",
    amount: "3",
    price: "£18,500.00",
    total: "£55,500.00",
    status: "completed",
  },
  {
    id: "TXN012",
    date: "2023-07-05",
    type: "sell",
    asset: "Gold Jewelry",
    amount: "5",
    price: "£1,600.00",
    total: "£8,000.00",
    status: "completed",
  },
  {
    id: "TXN013",
    date: "2023-09-01",
    type: "buy",
    asset: "Gold Bars (1oz)",
    amount: "25",
    price: "£1,450.00",
    total: "£36,250.00",
    status: "completed",
  },
  {
    id: "TXN014",
    date: "2023-10-18",
    type: "sell",
    asset: "Gold Coins",
    amount: "30",
    price: "£1,350.00",
    total: "£40,500.00",
    status: "completed",
  },
  {
    id: "TXN015",
    date: "2023-11-25",
    type: "buy",
    asset: "Gold Bars (5oz)",
    amount: "8",
    price: "£9,200.00",
    total: "£73,600.00",
    status: "completed",
  },
  {
    id: "TXN016",
    date: "2023-12-12",
    type: "sell",
    asset: "Gold Jewelry",
    amount: "7",
    price: "£1,250.00",
    total: "£8,750.00",
    status: "completed",
  },
  // 2022
  {
    id: "TXN017",
    date: "2022-02-10",
    type: "buy",
    asset: "Gold Bars (1oz)",
    amount: "15",
    price: "£1,850.00",
    total: "£27,750.00",
    status: "completed",
  },
  {
    id: "TXN018",
    date: "2022-04-15",
    type: "sell",
    asset: "Gold Coins",
    amount: "22",
    price: "£1,780.00",
    total: "£39,160.00",
    status: "completed",
  },
  {
    id: "TXN019",
    date: "2022-06-20",
    type: "buy",
    asset: "Gold Bars (10oz)",
    amount: "4",
    price: "£17,800.00",
    total: "£71,200.00",
    status: "completed",
  },
  {
    id: "TXN020",
    date: "2022-08-05",
    type: "sell",
    asset: "Gold Jewelry",
    amount: "6",
    price: "£1,550.00",
    total: "£9,300.00",
    status: "completed",
  },
  {
    id: "TXN021",
    date: "2022-09-12",
    type: "buy",
    asset: "Gold Bars (1oz)",
    amount: "28",
    price: "£1,420.00",
    total: "£39,760.00",
    status: "completed",
  },
  {
    id: "TXN022",
    date: "2022-10-25",
    type: "sell",
    asset: "Gold Coins",
    amount: "35",
    price: "£1,320.00",
    total: "£46,200.00",
    status: "completed",
  },
  {
    id: "TXN023",
    date: "2022-11-30",
    type: "buy",
    asset: "Gold Bars (5oz)",
    amount: "9",
    price: "£9,000.00",
    total: "£81,000.00",
    status: "completed",
  },
  {
    id: "TXN024",
    date: "2022-12-18",
    type: "sell",
    asset: "Gold Jewelry",
    amount: "8",
    price: "£1,200.00",
    total: "£9,600.00",
    status: "completed",
  },
  // 2021
  {
    id: "TXN025",
    date: "2021-01-08",
    type: "buy",
    asset: "Gold Bars (1oz)",
    amount: "18",
    price: "£1,750.00",
    total: "£31,500.00",
    status: "completed",
  },
  {
    id: "TXN026",
    date: "2021-03-14",
    type: "sell",
    asset: "Gold Coins",
    amount: "24",
    price: "£1,700.00",
    total: "£40,800.00",
    status: "completed",
  },
  {
    id: "TXN027",
    date: "2021-05-22",
    type: "buy",
    asset: "Gold Bars (10oz)",
    amount: "5",
    price: "£17,000.00",
    total: "£85,000.00",
    status: "completed",
  },
  {
    id: "TXN028",
    date: "2021-07-09",
    type: "sell",
    asset: "Gold Jewelry",
    amount: "7",
    price: "£1,480.00",
    total: "£10,360.00",
    status: "completed",
  },
  {
    id: "TXN029",
    date: "2021-08-16",
    type: "buy",
    asset: "Gold Bars (1oz)",
    amount: "30",
    price: "£1,390.00",
    total: "£41,700.00",
    status: "completed",
  },
  {
    id: "TXN030",
    date: "2021-09-28",
    type: "sell",
    asset: "Gold Coins",
    amount: "38",
    price: "£1,290.00",
    total: "£49,020.00",
    status: "completed",
  },
  {
    id: "TXN031",
    date: "2021-10-31",
    type: "buy",
    asset: "Gold Bars (5oz)",
    amount: "10",
    price: "£8,800.00",
    total: "£88,000.00",
    status: "completed",
  },
  {
    id: "TXN032",
    date: "2021-12-05",
    type: "sell",
    asset: "Gold Jewelry",
    amount: "9",
    price: "£1,150.00",
    total: "£10,350.00",
    status: "completed",
  },
  // 2020
  {
    id: "TXN033",
    date: "2020-02-11",
    type: "buy",
    asset: "Gold Bars (1oz)",
    amount: "20",
    price: "£1,650.00",
    total: "£33,000.00",
    status: "completed",
  },
  {
    id: "TXN034",
    date: "2020-04-17",
    type: "sell",
    asset: "Gold Coins",
    amount: "26",
    price: "£1,620.00",
    total: "£42,120.00",
    status: "completed",
  },
  {
    id: "TXN035",
    date: "2020-06-23",
    type: "buy",
    asset: "Gold Bars (10oz)",
    amount: "6",
    price: "£16,200.00",
    total: "£97,200.00",
    status: "completed",
  },
  {
    id: "TXN036",
    date: "2020-08-08",
    type: "sell",
    asset: "Gold Jewelry",
    amount: "8",
    price: "£1,410.00",
    total: "£11,280.00",
    status: "completed",
  },
  {
    id: "TXN037",
    date: "2020-09-19",
    type: "buy",
    asset: "Gold Bars (1oz)",
    amount: "32",
    price: "£1,360.00",
    total: "£43,520.00",
    status: "completed",
  },
  {
    id: "TXN038",
    date: "2020-10-27",
    type: "sell",
    asset: "Gold Coins",
    amount: "40",
    price: "£1,260.00",
    total: "£50,400.00",
    status: "completed",
  },
  {
    id: "TXN039",
    date: "2020-11-29",
    type: "buy",
    asset: "Gold Bars (5oz)",
    amount: "11",
    price: "£8,600.00",
    total: "£94,600.00",
    status: "completed",
  },
  {
    id: "TXN040",
    date: "2020-12-14",
    type: "sell",
    asset: "Gold Jewelry",
    amount: "10",
    price: "£1,100.00",
    total: "£11,000.00",
    status: "completed",
  },
  // 2019
  {
    id: "TXN041",
    date: "2019-01-06",
    type: "buy",
    asset: "Gold Bars (1oz)",
    amount: "22",
    price: "£1,550.00",
    total: "£34,100.00",
    status: "completed",
  },
  {
    id: "TXN042",
    date: "2019-03-13",
    type: "sell",
    asset: "Gold Coins",
    amount: "28",
    price: "£1,520.00",
    total: "£42,560.00",
    status: "completed",
  },
  {
    id: "TXN043",
    date: "2019-05-21",
    type: "buy",
    asset: "Gold Bars (10oz)",
    amount: "7",
    price: "£15,400.00",
    total: "£107,800.00",
    status: "completed",
  },
  {
    id: "TXN044",
    date: "2019-07-07",
    type: "sell",
    asset: "Gold Jewelry",
    amount: "9",
    price: "£1,380.00",
    total: "£12,420.00",
    status: "completed",
  },
  {
    id: "TXN045",
    date: "2019-08-18",
    type: "buy",
    asset: "Gold Bars (1oz)",
    amount: "35",
    price: "£1,330.00",
    total: "£46,550.00",
    status: "completed",
  },
  {
    id: "TXN046",
    date: "2019-09-26",
    type: "sell",
    asset: "Gold Coins",
    amount: "42",
    price: "£1,230.00",
    total: "£51,660.00",
    status: "completed",
  },
  {
    id: "TXN047",
    date: "2019-10-30",
    type: "buy",
    asset: "Gold Bars (5oz)",
    amount: "12",
    price: "£8,400.00",
    total: "£100,800.00",
    status: "completed",
  },
  {
    id: "TXN048",
    date: "2019-12-03",
    type: "sell",
    asset: "Gold Jewelry",
    amount: "11",
    price: "£1,050.00",
    total: "£11,550.00",
    status: "completed",
  },
  // 2018
  {
    id: "TXN049",
    date: "2018-02-09",
    type: "buy",
    asset: "Gold Bars (1oz)",
    amount: "24",
    price: "£1,450.00",
    total: "£34,800.00",
    status: "completed",
  },
  {
    id: "TXN050",
    date: "2018-04-16",
    type: "sell",
    asset: "Gold Coins",
    amount: "30",
    price: "£1,420.00",
    total: "£42,600.00",
    status: "completed",
  },
  {
    id: "TXN051",
    date: "2018-06-24",
    type: "buy",
    asset: "Gold Bars (10oz)",
    amount: "8",
    price: "£14,600.00",
    total: "£116,800.00",
    status: "completed",
  },
  {
    id: "TXN052",
    date: "2018-08-06",
    type: "sell",
    asset: "Gold Jewelry",
    amount: "10",
    price: "£1,350.00",
    total: "£13,500.00",
    status: "completed",
  },
  {
    id: "TXN053",
    date: "2018-09-17",
    type: "buy",
    asset: "Gold Bars (1oz)",
    amount: "38",
    price: "£1,300.00",
    total: "£49,400.00",
    status: "completed",
  },
  {
    id: "TXN054",
    date: "2018-10-28",
    type: "sell",
    asset: "Gold Coins",
    amount: "44",
    price: "£1,200.00",
    total: "£52,800.00",
    status: "completed",
  },
  {
    id: "TXN055",
    date: "2018-11-30",
    type: "buy",
    asset: "Gold Bars (5oz)",
    amount: "13",
    price: "£8,200.00",
    total: "£106,600.00",
    status: "completed",
  },
  {
    id: "TXN056",
    date: "2018-12-15",
    type: "sell",
    asset: "Gold Jewelry",
    amount: "12",
    price: "£1,000.00",
    total: "£12,000.00",
    status: "completed",
  },
  // 2017
  {
    id: "TXN057",
    date: "2017-01-07",
    type: "buy",
    asset: "Gold Bars (1oz)",
    amount: "26",
    price: "£1,350.00",
    total: "£35,100.00",
    status: "completed",
  },
  {
    id: "TXN058",
    date: "2017-03-15",
    type: "sell",
    asset: "Gold Coins",
    amount: "32",
    price: "£1,320.00",
    total: "£42,240.00",
    status: "completed",
  },
  {
    id: "TXN059",
    date: "2017-05-23",
    type: "buy",
    asset: "Gold Bars (10oz)",
    amount: "9",
    price: "£13,800.00",
    total: "£124,200.00",
    status: "completed",
  },
  {
    id: "TXN060",
    date: "2017-07-08",
    type: "sell",
    asset: "Gold Jewelry",
    amount: "11",
    price: "£1,320.00",
    total: "£14,520.00",
    status: "completed",
  },
  {
    id: "TXN061",
    date: "2017-08-19",
    type: "buy",
    asset: "Gold Bars (1oz)",
    amount: "40",
    price: "£1,270.00",
    total: "£50,800.00",
    status: "completed",
  },
  {
    id: "TXN062",
    date: "2017-09-27",
    type: "sell",
    asset: "Gold Coins",
    amount: "46",
    price: "£1,170.00",
    total: "£53,820.00",
    status: "completed",
  },
  {
    id: "TXN063",
    date: "2017-10-31",
    type: "buy",
    asset: "Gold Bars (5oz)",
    amount: "14",
    price: "£8,000.00",
    total: "£112,000.00",
    status: "completed",
  },
  {
    id: "TXN064",
    date: "2017-12-06",
    type: "sell",
    asset: "Gold Jewelry",
    amount: "13",
    price: "£950.00",
    total: "£12,350.00",
    status: "completed",
  },
  // 2016
  {
    id: "TXN065",
    date: "2016-02-10",
    type: "buy",
    asset: "Gold Bars (1oz)",
    amount: "28",
    price: "£1,250.00",
    total: "£35,000.00",
    status: "completed",
  },
  {
    id: "TXN066",
    date: "2016-04-18",
    type: "sell",
    asset: "Gold Coins",
    amount: "34",
    price: "£1,220.00",
    total: "£41,480.00",
    status: "completed",
  },
  {
    id: "TXN067",
    date: "2016-06-26",
    type: "buy",
    asset: "Gold Bars (10oz)",
    amount: "10",
    price: "£13,000.00",
    total: "£130,000.00",
    status: "completed",
  },
  {
    id: "TXN068",
    date: "2016-08-09",
    type: "sell",
    asset: "Gold Jewelry",
    amount: "12",
    price: "£1,290.00",
    total: "£15,480.00",
    status: "completed",
  },
  {
    id: "TXN069",
    date: "2016-09-20",
    type: "buy",
    asset: "Gold Bars (1oz)",
    amount: "42",
    price: "£1,240.00",
    total: "£52,080.00",
    status: "completed",
  },
  {
    id: "TXN070",
    date: "2016-10-29",
    type: "sell",
    asset: "Gold Coins",
    amount: "48",
    price: "£1,140.00",
    total: "£54,720.00",
    status: "completed",
  },
  {
    id: "TXN071",
    date: "2016-11-30",
    type: "buy",
    asset: "Gold Bars (5oz)",
    amount: "15",
    price: "£7,800.00",
    total: "£117,000.00",
    status: "completed",
  },
  {
    id: "TXN072",
    date: "2016-12-17",
    type: "sell",
    asset: "Gold Jewelry",
    amount: "14",
    price: "£900.00",
    total: "£12,600.00",
    status: "completed",
  },
  // 2025
  {
    id: "TXN073",
    date: "2025-02-12",
    type: "buy",
    asset: "Gold Bars (1oz)",
    amount: "14",
    price: "£2,100.00",
    total: "£29,400.00",
    status: "completed",
  },
  {
    id: "TXN074",
    date: "2025-04-19",
    type: "sell",
    asset: "Gold Coins",
    amount: "16",
    price: "£2,050.00",
    total: "£32,800.00",
    status: "completed",
  },
  {
    id: "TXN075",
    date: "2025-06-27",
    type: "buy",
    asset: "Gold Bars (10oz)",
    amount: "2",
    price: "£20,500.00",
    total: "£41,000.00",
    status: "pending",
  },
  {
    id: "TXN076",
    date: "2025-08-11",
    type: "sell",
    asset: "Gold Jewelry",
    amount: "4",
    price: "£1,900.00",
    total: "£7,600.00",
    status: "completed",
  },
  {
    id: "TXN077",
    date: "2025-09-22",
    type: "buy",
    asset: "Gold Bars (1oz)",
    amount: "18",
    price: "£2,000.00",
    total: "£36,000.00",
    status: "completed",
  },
  {
    id: "TXN078",
    date: "2025-10-31",
    type: "sell",
    asset: "Gold Coins",
    amount: "20",
    price: "£1,980.00",
    total: "£39,600.00",
    status: "completed",
  },
  {
    id: "TXN079",
    date: "2025-11-30",
    type: "buy",
    asset: "Gold Bars (5oz)",
    amount: "6",
    price: "£10,000.00",
    total: "£60,000.00",
    status: "pending",
  },
  {
    id: "TXN080",
    date: "2025-12-19",
    type: "sell",
    asset: "Gold Jewelry",
    amount: "5",
    price: "£1,850.00",
    total: "£9,250.00",
    status: "completed",
  },
  // 2026
  {
    id: "TXN081",
    date: "2026-01-14",
    type: "buy",
    asset: "Gold Bars (1oz)",
    amount: "16",
    price: "£2,150.00",
    total: "£34,400.00",
    status: "completed",
  },
  {
    id: "TXN082",
    date: "2026-03-21",
    type: "sell",
    asset: "Gold Coins",
    amount: "18",
    price: "£2,100.00",
    total: "£37,800.00",
    status: "completed",
  },
  {
    id: "TXN083",
    date: "2026-05-28",
    type: "buy",
    asset: "Gold Bars (10oz)",
    amount: "3",
    price: "£21,000.00",
    total: "£63,000.00",
    status: "pending",
  },
  {
    id: "TXN084",
    date: "2026-07-13",
    type: "sell",
    asset: "Gold Jewelry",
    amount: "6",
    price: "£1,950.00",
    total: "£11,700.00",
    status: "completed",
  },
  {
    id: "TXN085",
    date: "2026-08-24",
    type: "buy",
    asset: "Gold Bars (1oz)",
    amount: "20",
    price: "£2,050.00",
    total: "£41,000.00",
    status: "completed",
  },
  {
    id: "TXN086",
    date: "2026-09-30",
    type: "sell",
    asset: "Gold Coins",
    amount: "22",
    price: "£2,000.00",
    total: "£44,000.00",
    status: "completed",
  },
  {
    id: "TXN087",
    date: "2026-10-31",
    type: "buy",
    asset: "Gold Bars (5oz)",
    amount: "7",
    price: "£10,200.00",
    total: "£71,400.00",
    status: "pending",
  },
  {
    id: "TXN088",
    date: "2026-12-21",
    type: "sell",
    asset: "Gold Jewelry",
    amount: "7",
    price: "£1,900.00",
    total: "£13,300.00",
    status: "completed",
  },
];

export function TransactionsTable({ userName }: TransactionsTableProps) {
  const [selectedYear, setSelectedYear] = useState<string>("all");

  const basePortfolio = 3892450;
  const targetPortfolio = userName === "hushmoney" ? 5000000 : 300000;
  const scale = targetPortfolio / basePortfolio;

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

  const scaleTransaction = (txn: Transaction): Transaction => {
    const priceNum = parseFloat(txn.price.replace('£', '').replace(',', ''));
    const totalNum = parseFloat(txn.total.replace('£', '').replace(',', ''));
    const scaledPrice = Math.round(priceNum * scale);
    const scaledTotal = Math.round(totalNum * scale);
    return {
      ...txn,
      price: `£${scaledPrice.toLocaleString()}`,
      total: `£${scaledTotal.toLocaleString()}`,
    };
  };

  // Scale transactions based on user
  const scaledTransactions = transactions.map(scaleTransaction);

  // Filter transactions by selected year
  const filteredTransactions = selectedYear === "all"
    ? scaledTransactions
    : scaledTransactions.filter(txn => txn.date.startsWith(selectedYear));

  // Get unique years for dropdown
  const years = ["all", ...Array.from(new Set(transactions.map(txn => txn.date.split("-")[0]))).sort().reverse()];

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <div className="flex justify-between items-center mb-2">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Recent Transactions</h2>
            <p className="text-gray-600">Your latest gold trading activities</p>
          </div>
          <div className="flex items-center space-x-2">
            <label htmlFor="year-filter" className="text-sm font-medium text-gray-700">Filter by Year:</label>
            <select
              id="year-filter"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-sm"
            >
              {years.map(year => (
                <option key={year} value={year}>
                  {year === "all" ? "All Years" : year}
                </option>
              ))}
            </select>
          </div>
        </div>
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
            {filteredTransactions.map((transaction) => (
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
