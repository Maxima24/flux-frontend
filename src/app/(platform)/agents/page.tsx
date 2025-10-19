import {AgentsClient} from "./AgentsClient";
import  Card  from "@/componentsui/card";
import  Button  from "@/componentsui/button";
import { motion } from "framer-motion";
import ConnectWallet from "@/componentsweb3/ConnectWallet";

console.log("AgentsClient:", typeof AgentsClient);
console.log("Card:", typeof Card);
console.log("Button:", typeof Button);
console.log("motion:", typeof motion);
console.log("ConnectWallet:", typeof ConnectWallet);
// ...existing code...
export default function AgentsPage() {
  //  return <div style={{ padding: 24 }}>Agents client placeholder</div>;
  return <AgentsClient />;
}
// ...