import  Card  from "@/components/ui/card";
import  Button  from "@/components/ui/button";
import { motion } from "framer-motion";
import  ConnectWallet  from "@/components/web3/ConnectWallet";
import AgentsClient from './AgentsClient';

console.log("AgentsClient:", typeof AgentsClient);
console.log("Card:", typeof Card);
console.log("Button:", typeof Button);
console.log("motion:", typeof motion);
console.log("ConnectWallet:", typeof ConnectWallet);
// ...existing code...
export default function AgentsPage() {
  //  return <div style={{ padding: 24 }}>Agents client placeholder</div>;
  return <div>
    hi
  </div>
  ;
}
// ...