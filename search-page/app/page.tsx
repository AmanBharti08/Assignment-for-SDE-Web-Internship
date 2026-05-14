import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
import Mains from "../components/Mains/Mains";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Navbar */}
      <Navbar />
      <Mains/>
    </div>
  );
}
