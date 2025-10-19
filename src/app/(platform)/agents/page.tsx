// ...existing code...
import dynamic from "next/dynamic";

// Load the client UI only on the client to avoid prerender errors
const AgentsClient = dynamic(
  () =>
    import("./AgentsClient").then((mod) => mod.AgentsClient),
  { ssr: false }
);

export default function AgentsPage() {
  return <AgentsClient />;
}
// ...existing code...