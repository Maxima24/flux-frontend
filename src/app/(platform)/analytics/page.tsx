// ...existing code...
"use client"
import AnalyticsClient from "./AnalyticsClient"; // or the client component used
import Card from "@/components/ui/card";
import Button  from "@/components/ui/button";
import { motion } from "framer-motion";
import ConnectWallet from "@/components/web3/ConnectWallet";

console.log("AnalyticsClient:", typeof AnalyticsClient);
console.log("Card:", typeof Card);
console.log("Button:", typeof Button);
console.log("motion:", typeof motion);
console.log("ConnectWallet:", typeof ConnectWallet);
 const AnalyticsPage=() =>{
  return <AnalyticsClient />;
}
export default AnalyticsPage
// ...existing code...