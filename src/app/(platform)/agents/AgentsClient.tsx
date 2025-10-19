// ...existing code...
"use client";

import  Button  from "components/ui/button";
import  Card  from "components/ui/card";
import { motion } from "framer-motion";

const agents = [
  { id: "usdc-yield", name: "USDC Yield Optimizer", description: "Automatically moves USDC between lending protocols to capture the highest yields", status: "active", tvl: "$12,450", apy: "8.2%", protocols: ["Aave", "Compound", "Curve"] },
  { id: "eth-yield", name: "ETH Yield Aggregator", description: "Optimizes staked ETH positions across liquid staking protocols", status: "inactive", tvl: "$8,230", apy: "5.1%", protocols: ["Lido", "Rocket Pool", "StakeWise"] },
  { id: "btc-yield", name: "BTC Yield Maximizer", description: "Manages wrapped BTC positions to generate optimal yield", status: "active", tvl: "$15,780", apy: "4.8%", protocols: ["Aave", "Compound", "Curve"] },
];

export function AgentsClient() {
  return (
    // <div className="p-6">
    //   <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="mb-8 flex items-center justify-between">
    //     <div>
    //       <h1 className="text-3xl font-bold">AI Agents</h1>
    //       <p className="text-sm text-gray-400">Deploy and manage autonomous AI agents</p>
    //     </div>
    //     <Button variant="gradient">Deploy New Agent</Button>
    //   </motion.div>

    //   <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    //     {agents.map((a, i) => (
    //       <motion.div key={a.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
    //         <Card variant="glass" hover="lift" className="p-6">
    //           <div className="mb-3 flex items-center justify-between">
    //             <h3 className="font-semibold">{a.name}</h3>
    //             <span className={`text-xs px-2 py-1 rounded-full ${a.status === "active" ? "bg-green-500/20 text-green-500" : "bg-gray-500/20 text-gray-400"}`}>{a.status}</span>
    //           </div>
    //           <p className="text-sm text-gray-400 mb-4">{a.description}</p>
    //           <div className="flex items-center justify-between text-sm">
    //             <div>
    //               <div className="text-xs text-gray-400">TVL</div>
    //               <div className="font-semibold">{a.tvl}</div>
    //             </div>
    //             <div>
    //               <div className="text-xs text-gray-400">APY</div>
    //               <div className="font-semibold text-primary-500">{a.apy}</div>
    //             </div>
    //           </div>
    //         </Card>
    //       </motion.div>
    //     ))}
    //   </div>
    // </div>
    <Card className="p-6">Card test</Card>
  );
}
// ...existing code...