// ...existing code...
"use client";

import  Card  from "@/components/ui/card";
import { motion } from "framer-motion";

const agents = [
  { id: "usdc-yield", name: "USDC Yield Optimizer", description: "Automatically moves USDC between lending protocols to capture the highest yields", status: "active", tvl: "$12,450", apy: "8.2%", protocols: ["Aave", "Compound", "Curve"] },
  { id: "eth-yield", name: "ETH Yield Aggregator", description: "Optimizes staked ETH positions across liquid staking protocols", status: "inactive", tvl: "$8,230", apy: "5.1%", protocols: ["Lido", "Rocket Pool", "StakeWise"] },
  { id: "btc-yield", name: "BTC Yield Maximizer", description: "Manages wrapped BTC positions to generate optimal yield", status: "active", tvl: "$15,780", apy: "4.8%", protocols: ["Aave", "Compound", "Curve"] },
];

export default function AgentsClient() {
  return (
    <div className="grid gap-6">
      {agents.map((agent, index) => (
        <motion.div
          key={agent.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card variant="glass" hover="lift">
            {/* Card content */}
          </Card>
        </motion.div>
      ))}
    </div>
  );
}