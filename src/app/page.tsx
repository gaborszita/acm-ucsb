import Navbar from "../components/shared/Navbar/Navbar";
import Hero from "../components/landing/Hero";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col align-center">
        <Navbar />
        <Hero />
        
      </div>
    </main>
  );
};
